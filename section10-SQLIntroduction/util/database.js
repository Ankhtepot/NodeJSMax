const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodecourse',
    password: '90125381'
});

module.exports = pool.promise();