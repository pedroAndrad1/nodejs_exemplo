const Sequelize = require('sequelize');

const dbConfig = require('../config/database');

const User = require('../models/User');
const Address = require('../models/Address');
const Course = require('../models/Course');
// Criando uma conexao com o banco
const connection = new Sequelize(dbConfig);
// Iniciando a conexao dos models com o banco
User.init(connection);
Address.init(connection);
Course.init(connection);

// Associando as tabelas entre si
Address.associate(connection.models);
User.associate(connection.models);
Course.associate(connection.models);


module.exports = connection;