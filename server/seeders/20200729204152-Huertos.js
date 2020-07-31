'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Huertos', [
        {
          detalle: 'Huerto Kevin',
          idUsuario: '1',
          region: 'Costa',
          fruta: true,
          legumbre: true,
          hierba: false,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          detalle: 'Huerto Jazmin',
          idUsuario: '3',
          region: 'Oriente',
          fruta: true,
          legumbre: true,
          hierba: true,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          detalle: 'Huerto Henry',
          idUsuario: '2',
          region: 'Sierra',
          fruta: true,
          legumbre: false,
          hierba: false,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Huertos', null, {});
  }
};
