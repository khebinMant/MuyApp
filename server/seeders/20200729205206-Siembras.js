'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('Siembras', [
        //Pedro Huertos 
        {
          idProducto: 11,
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
          idProducto: 12,
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
          idProducto: 13,
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
          idProducto: 14,
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
          idProducto: 15,
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
          idProducto: 16,
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
          idProducto: 17,
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
          idProducto: 18,
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
          idProducto: 19,
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
          idProducto: 20,
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
        // 
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
