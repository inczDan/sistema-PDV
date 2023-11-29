const knex = require('../database/connection');
const jwt = require('jsonwebtoken');

const obterAutenticacao = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ mensagem: 'Não autorizado' });
  }

  try {
    const token = authorization.replace('Bearer', '').trim();
    console.log(token);

    if (!token) {
      return res.status(401).json({ mensagem: 'Não autorizado' });
    }
    const tokenVendedor = jwt.verify(token, process.env.SECRET_JWT);
    console.log(tokenVendedor);

    const { id } = tokenVendedor;
    const vendedor = await knex('vendedores').where({ id }).first();

    if (!vendedor) {
      return res.status(404).json({ mensagem: 'Vendedor não encontrado.' });
    }

    req.vendedor = vendedor;

    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ mensagem: 'Token inválido' });
    }
    return res.status(500).json({ mensagem: error.message });
  }
};

module.exports = obterAutenticacao;
