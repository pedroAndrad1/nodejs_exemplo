const express = require('express');

const routes = require('./routes.js');
// Chamando a conexao com o banco de dados
// isso executa tudo que esta em './database/index'
require('./database');

const app = express();
//Define que as respostas das requisicoes vao ser no formato json
app.use(express.json());


app.use(routes);


app.listen(3333);