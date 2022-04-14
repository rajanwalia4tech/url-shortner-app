const mysql = require("mysql2");

const connection = mysql.createConnection({
    "host": "localhost",
    "database": "urlshortner",
    "user": "root",
    "password": "root123"
})


module.exports.connection = connection