'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('Siembras', [
        {
          idProducto: 1,
          idHuerto: 1,
          fechaSiembra: new Date(),
          fechaCosecha: new Date(),
          fechaRiego: new Date(),
          estadoRiego: true,
          cosechado: true,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idProducto: 1,
          idHuerto: 2,
          fechaSiembra: new Date(),
          fechaCosecha: new Date(),
          fechaRiego: new Date(),
          estadoRiego: true,
          cosechado: true,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idProducto: 1,
          idHuerto: 3,
          fechaSiembra: new Date(),
          fechaCosecha: new Date(),
          fechaRiego: new Date(),
          estadoRiego: true,
          cosechado: true,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});
  
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Siembras', null, {});
    
  }
};
