const express = require('express');
const app = express();

const routeTodo = require('./routes/todos');

function entete(req, res, next){
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', 'Content-type');
    next();
}
app.use(express.json()); // pour obtenir les données venant de front (formulaire)(exemple après clic bouton) 
app.use(entete);

app.use('/', routeTodo);

app.listen(4200)