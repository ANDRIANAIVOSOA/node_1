const mysql      = require('mysql');
const connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'todo'
});
module.exports = connection;


