require('dotenv').config();
console.log(process.env);
const express = require('express');
const cors = require('cors');
const path = require('path');

const rotasVendedor = require('./routes/vendedor-rota');
const rotasCategoria = require('./routes/categoria-rota');
const homepage = require('./routes/hpage');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'meu-app', 'build', 'index.html'));
});
app.use(homepage);
app.use(rotasCategoria);
app.use(rotasVendedor);

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
