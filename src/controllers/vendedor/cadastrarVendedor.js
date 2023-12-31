const knex = require('../../../knexfile');
const bcrypt = require('bcryptjs');

const cadastrarVendedor = async (req, res) => {
  const { nome, cpf, email, senha } = req.body;

  try {
    const vendedorExiste = await knex('vendedores').where({ cpf }).orWhere({ email }).first();

    if (vendedorExiste) {
      return res.status(400).json({ mensagem: 'Vendedor já cadastrado' });
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const vendedor = await knex('vendedores')
      .insert({
        nome,
        cpf,
        email,
        senha: senhaCriptografada,
      })
      .returning(['id', 'nome', 'cpf', 'email']);

    console.log(vendedor);

    return res.status(201).json(vendedor);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
};

module.exports = { cadastrarVendedor };
