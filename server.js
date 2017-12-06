const express = require('express');
const bodyParser = require('body-parser');
const sqlite = require('sqlite3');

const server = express();

server.use(bodyParser.json());

const knexConfig = require('./knexfile.js');
const knex = require('knex')(knexConfig.development);

// endpoints here
server.get('/zoos', (req, res) => {
  knex('zoos')
    .then(zoos => res.json(zoos))
    .catch(err => res.status(500).json(err));
});
server.get('/zoos/:id', (req, res) => {
  const { id } = req.params;

  knex('zoos')
    .where('id', id)
    .then(zoos => res.json(zoos))
    .catch(err => res.status(500).json(err));
});

server.get('/bears', (req, res) => {
  knex('bears')
    .then(records => res.json(bears))
    .catch(err => res.status(500).json(err));
});
server.get('/bears/:id', (req, res) => {
  const { id } = req.params;
  
  knex('bears')
    .where('id', id)
    .then(bears => res.json(zoos))
    .catch(err => res.status(500).json(err));
});

const port = 3000;
server.listen(port, function() {
    console.log(`Server Listening on ${port}`);
});
