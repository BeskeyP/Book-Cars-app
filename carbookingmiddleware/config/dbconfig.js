const mysql = require('mysql');

//local mysql db connection
const dbConnPool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Beskey12@',
    database: 'carbooking'
});

dbConnPool.connect(function (err) {
    if (err)
        throw err;

    console.log("Database Connected!");
});

module.exports = dbConnPool;
