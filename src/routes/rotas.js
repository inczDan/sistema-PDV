const { Router } = require('express');

const obterAutenticacao = require('../middlewares/autenticacao');
const rotas = Router();

rotas.use(obterAutenticacao);

module.exports = rotas;
