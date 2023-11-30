const { Router } = require('express');
const { listarCategorias } = require('../controllers/categoria/listarCategorias');

const rotasCategoria = Router();

rotasCategoria.get('/categorias', listarCategorias);

module.exports = rotasCategoria;
