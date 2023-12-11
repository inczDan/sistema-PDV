const { Router } = require('express');
const { listarCategorias } = require('../controllers/categoria/listarCategorias');

const rotasCategoria = Router();

rotasCategoria.get('/teste', listarCategorias);

module.exports = rotasCategoria;
