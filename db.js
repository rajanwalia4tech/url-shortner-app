const mysql = require("mysql2");

// const connection = mysql.createConnection({
//     "host":"localhost",
//     "database": "urlshortner",
//     "user": "root",
//     "password":"root123"
// })

const connection = mysql.createConnection({
    "host":"database-1.c5vxssp0ryxz.ap-south-1.rds.amazonaws.com",
    "database": "urlshortner",
    "user": "admin",
    "password":"1Jan2000"
})



module.exports.connection = connection