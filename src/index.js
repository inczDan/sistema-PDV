require('dotenv').config();
const express = require('express');
const cors = require('cors');

const rotasVendedor = require('./routes/vendedor-rota');
const rotasCategoria = require('./routes/categoria-rota');

const app = express();

app.use(express.json());
app.use(cors());

app.use(rotasVendedor);
app.use(rotasCategoria);

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
