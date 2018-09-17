const Express = require('express');
const Router = Express.Router();
const db = require('../db');
const todoModel = require('../repository/todoModel');

Router.get('/', async function(req, res, next) {
    try {/*
        todoModel.list()
            .then(resolv => {
                res.send(resolv);
            })
            .catch(err => {
                res.status(500).send('Erreur');
            });*/
        const resolve = await todoModel.list();
        res.send(resolve);
    } catch(e) {
        console.log(e)
    }
});


Router.post('/', function(req, res, next) {
    try {
        todoModel.del()
            .then(() => {
                const promesses = [];
                req.body.forEach(element => {
                    promesses.push(todoModel.insert(element.content))
                });
                return Promise.all(promesses);
            })
            .then(resolv => {
                res.send([]);
            })
            .catch(err => {
                res.status(500).send('Erreur insert');
            })
        
        console.log("***********************");
    } catch(e) {
        console.log(e)
    }
});

module.exports = Router;