const Express = require('express');
const Router = Express.Router();
const db = require('../db');

Router.get('/', function(req, res, next) {
    try {
        console.log(1);
        db.query('SELECT * FROM todo', function (error, results, fields) {
            console.log(2);
            if (error) throw error;
            setTimeout(() => {
                res.send(results);
                console.log(3);
            },30000);
            console.log(4);
        });
        console.log(5);
    } catch(e) {
        console.log(e)
    }
});

Router.post('/', function(req, res, next) {
    try { 
        db.query("DELETE FROM todo", () => {
            req.body.forEach(element => {
                db.query('INSERT INTO todo (nom) VALUES (?)',[element.content], function(error, rows) {
                    if(error){
                        console.log(error);
                        return;
                    }
                });
            });
        });
        console.log("***********************");
    } catch(e) {
        console.log(e)
    }
});

module.exports = Router;