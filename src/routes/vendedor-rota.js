const { Router } = require('express');

const { cadastrarVendedor } = require('../controllers/vendedor/cadastrarVendedor');
const { editarVendedor } = require('../controllers/vendedor/editarVendedor');
const { loginVendedor } = require('../controllers/vendedor/loginVendedor');
const { obterPerfilVendedor } = require('../controllers/vendedor/obterPerfilVendedor');

const obterAutenticacao = require('../middlewares/autenticacao');
const rotas = Router();

rotas.post('/cadastrar-vendedor', cadastrarVendedor);
rotas.post('/login-vendedor', loginVendedor);

rotas.use(obterAutenticacao);

rotas.get('/perfil-vendedor', obterPerfilVendedor);
rotas.put('/editar-vendedor', editarVendedor);

module.exports = rotas;
