'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Productos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      categoria: {
        type: Sequelize.STRING
      },
      nombreComun: {
        type: Sequelize.STRING
      },
      nombreCientifico: {
        type: Sequelize.STRING
      },
      imagen: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      dificultad: {
        type: Sequelize.STRING
      },
      temporada: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Productos');
  }
};