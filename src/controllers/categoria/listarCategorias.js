const knex = require('../../database/connection');

const listarCategorias = async (req, res) => {
  const categorias = await knex('categorias');
  try {
    if (!categorias) {
      return res.status(404).json({ mensagem: 'Nenhuma categoria encontrada' });
    }

    return res.status(200).json(categorias);
  } catch (error) {
    return res.status(500).json({ mensagem: error.message });
  }
};

module.exports = { listarCategorias };
