const obterPerfilVendedor = async (req, res) => {
  const { senha: _, cpf: __, ...perfilvendedor } = req.vendedor;

  return res.status(200).json(perfilvendedor);
};

module.exports = { obterPerfilVendedor };
