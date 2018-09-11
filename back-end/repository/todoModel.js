const db = require('../db');
const list = function allTodo(){
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM todo', (err, result, fields) => {
            if(err) reject(err);
            resolve(result);   
        })
            
    }); 
}
const deletee = function deletee(){
    return new Promise((resolve, reject) => {
        db.query("DELETE FROM todo", (err, result, fields) => {
            if(err) reject(err);
            resolve(result);
        })
})
}

const insert = function insert(content){
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO todo (nom) VALUES (?)",[content], (err, result) => {
            if(err) reject(err);
            resolve(result);
        })
    })
}
module.exports.list = list;
module.exports.del = deletee;
module.exports.insert = insert;
