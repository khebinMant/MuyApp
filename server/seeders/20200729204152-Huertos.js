'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Huertos', [
        {
          detalle: 'Huerto Pedro',
          idPersonaRol: 4,
          region: 'Costa',
          fruta: true,
          legumbre: true,
          hierba: false,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          detalle: 'Huerto Juan',
          idPersonaRol: 5,
          region: 'Oriente',
          fruta: true,
          legumbre: true,
          hierba: true,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          detalle: 'Huerto Kevin',
          idPersonaRol: 1,
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
