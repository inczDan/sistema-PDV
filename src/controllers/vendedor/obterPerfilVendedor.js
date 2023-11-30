const obterPerfilVendedor = async (req, res) => {
  try {
    const { senha: _, cpf: __, ...perfilvendedor } = req.vendedor;
    return res.status(200).json(perfilvendedor);
  } catch (error) {
    return res
      .status(500)
      .json({ erro: 'Não foi possivel exibir o perfil, tente novamente mais tarde!' });
  }
};

module.exports = { obterPerfilVendedor };
