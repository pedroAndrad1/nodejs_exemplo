'use strict';

module.exports = {
  //Neste metodo devem estar os comandos para criar/alterar a tabela
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });

  },
    //Neste metodo devem estar os comandos para desfazer os comandos de cima
  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('users');

  }
};
