const express = require('express');
const app = express();
const animeController = require('./controller/AnimeController');
app.use(express.json());


app.get('/:id', (req, res) => animeController.findById(req, res));
app.get('/', (req, res) => animeController.findAll(req, res));
app.post('/', (req, res) => animeController.insert(req, res));
app.delete('/:id', (req, res) => animeController.delete(req, res));
app.put('/:id', (req, res) => animeController.update(req, res));


module.exports = app;