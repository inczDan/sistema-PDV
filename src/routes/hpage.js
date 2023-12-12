const { Router } = require('express');
const homepage = Router();
homepage.get('/', (req, res) => {
  res.send('Bem-vindo ao meu aplicativo! (mensagem de teste)');
});

module.exports = homepage;
