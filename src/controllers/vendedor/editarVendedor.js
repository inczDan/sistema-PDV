const knex = require('../../../knexfile');
const bcrypt = require('bcrypt');

const editarVendedor = async (req, res) => {
  const { nome, email, senha } = req.body;
  const { id } = req.vendedor;

  try {
    const vendedorExiste = await knex('vendedores').where({ email }).first();

    if (vendedorExiste && vendedorExiste.id !== id) {
      return res.status(400).json({ erro: 'O email informado já foi cadastrado' });
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const vendedorAtualizado = {
      nome,
      email,
      senha: senhaCriptografada,
    };

    await knex('vendedores').update(vendedorAtualizado).where({ id });

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ erro: error.message });
  }
};

module.exports = { editarVendedor };
