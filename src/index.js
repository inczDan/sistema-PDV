require('dotenv').config();
const express = require('express');
const cors = require('cors');

const rotasVendedor = require('./routes/vendedor-rota');
const rotasCategoria = require('./routes/categoria-rota');
const homepage = require('./routes/hpage');

const app = express();

app.use(express.json());
app.use(cors());

app.use(homepage);
app.use(rotasCategoria);
app.use(rotasVendedor);

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
