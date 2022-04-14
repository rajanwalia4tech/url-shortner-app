const express = require("express");
const md5 = require("md5");
const base62 = require("base62");
const converter = require("hex2dec");
const {connection} = require("./db");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const urlService = require("./urls_service");
const PORT = process.env.PORT || 3000;

app.post("/",async (req,res)=>{
    try{
        if(!req.body.url) throw new Error("URL is missing!");
        let long_url = req.body.url;
        if(!long_url.includes("http")) throw new Error("It is not an URL!");
        let [longUrl] = await urlService.findLongUrl({long_url});
        if(longUrl) return res.status(200).send({"short_url":longUrl.short_url});
        let hashed = md5(long_url);
        let decimal  = converter.hexToDec(hashed)//parseInt(hashed,16);
        
        let short_url,urls,result;
        do{
        const number = parseInt(Math.random()*10000000000000);
        result = base62.encode(number+decimal);
        short_url = `http://localhost:3000/${result.substring(0,7)}`;
        urls  = await urlService.findShortUrl({short_url});
        }while(urls.length!=0);

        let date = new Date()
        date.setFullYear(date.getFullYear()+1)
        await urlService.InsertShortUrl({short_url,long_url,created_at : new Date(),expiration_at : date});

        return res.send({short_url});
    }catch(err){
        return res.status(400).send(err.message);
    }
});

app.get("/:shortUrl",async(req,res)=>{
    try{
        const shortUrl = req.params.shortUrl;
        if(!shortUrl) throw new Error("ShortUrl is missing");
        let [longUrl] = await urlService.findShortUrl({short_url : `http://localhost:3000/${shortUrl}`});
        console.log(longUrl);
        if(longUrl)
            return res.redirect(longUrl.long_url);
        //return res.status(200).send({"long_url":longUrl.long_url});

        return res.status(404).send({message : "Url Not Found"});
    }catch(err){
        return res.status(400).send(err.message);
    }

})

app.listen(PORT,(err)=>{
    if(err) console.log(err);
    console.log(`SERVER is listening on http://localhost:${PORT}`)
})
