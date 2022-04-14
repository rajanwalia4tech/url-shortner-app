const {connection} = require("./db");

module.exports.InsertShortUrl = async(payload)=>{
    return new Promise((resolve,reject)=>{
        
        connection.query("INSERT INTO urls_info (short_url,long_url,created_at,expiration_at) VALUES(?,?,?,?)",
        [payload.short_url,payload.long_url,payload.created_at,payload.expiration_at],
        function(err,result,fields){
            if(err) reject(err);
            resolve(result);
        });
        
    })
}

module.exports.findShortUrl = async(payload)=>{
    return new Promise((resolve,reject)=>{
        
        connection.query("SELECt * from urls_info where short_url = ?",
        [payload.short_url],
        function(err,result,fields){
            if(err) reject(err);
            resolve(result);
        });
        
    })
}

module.exports.findLongUrl = async(payload)=>{
    return new Promise((resolve,reject)=>{
        
        connection.query("SELECt * from urls_info where long_url = ?",
        [payload.long_url],
        function(err,result,fields){
            if(err) reject(err);
            resolve(result);
        });
        
    })
}