const express = require('express');

const server = express();

// your code here




const dbaccount = require('./data/accounts-model.js');

server.get('/', (req, res) => {
  res.send(`
    <h2>DB TEST</h2>
  `)
})

server.get('/api/accounts', (req, res) =>{
  dbaccount.find()
    .then( project => {
      res.status(200).json(project)
    })
    .catch( err => {
      res.status(500).json({ error: err, message:"Could not update data"})
    })
})

module.exports = server;