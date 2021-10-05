const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: '<DB_NAME>',
    password: '<DB_PASSWORD>'
});

module.exports = pool.promise();