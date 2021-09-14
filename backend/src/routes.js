const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({
    titulo: "Exemplo nota",
    testo: "ese é um exemplo de nota"
  })
});

module.exports = routes;