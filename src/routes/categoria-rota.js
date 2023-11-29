const { Router } = require("express");
const {
    listarCategorias,
} = require("../controllers/categorias/listarCategorias");

const rotasCategoria = Router();

rotasCategoria.get("/categorias", listarCategorias);

module.exports = rotasCategoria;
