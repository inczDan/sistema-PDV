const knex = require('../../../knexfile');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const loginVendedor = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const vendedor = await knex('vendedores').where({ email }).first();

    if (!vendedor) {
      return res.status(404).json({ mensagem: 'Vendedor não encontrado' });
    }

    const senhaCorreta = await bcrypt.compare(senha, vendedor.senha);

    if (vendedor.email !== email || !senhaCorreta) {
      return res.status(400).json({ mensagem: 'Email ou senha incorretos' });
    }

    const token = jwt.sign({ id: vendedor.id }, process.env.SECRET_JWT, {
      expiresIn: '8h',
    });

    const { senha: _, cpf: __, ...dadosVendedor } = vendedor;
    return res.status(200).json({ vendedor: dadosVendedor, token });
  } catch (error) {
    return res.status(500).json({ mensagem: error.message });
  }
};

module.exports = { loginVendedor };
