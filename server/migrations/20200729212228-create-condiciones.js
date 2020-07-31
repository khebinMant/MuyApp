'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Condiciones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      exposicionSol: {
        type: Sequelize.STRING
      },
      tipoSuelo: {
        type: Sequelize.STRING
      },
      espacioRecomendado: {
        type: Sequelize.INTEGER
      },
      profundidadSemilla: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Condiciones');
  }
};