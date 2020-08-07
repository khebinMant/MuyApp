'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('Siembras', [
        //Pedro Huertos 
        {
          idProducto: 11,
          idHuerto: 1,
          fechaSiembra: '05/08/2020',
          fechaCosecha: '15/10/2020',
          fechaRiego: '05/08/2020',
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
          fechaSiembra: '06/08/2020',
          fechaCosecha: '16/11/2020',
          fechaRiego: '06/08/2020',
          estadoRiego: true,
          cosechado: true,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idProducto: 16,
          idHuerto: 1,
          fechaSiembra: '06/08/2020',
          fechaCosecha: '06/02/2020',
          fechaRiego: '06/08/2020',
          estadoRiego: true,
          cosechado: true,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idProducto: 17,
          idHuerto: 1,
          fechaSiembra: '06/08/2020',
          fechaCosecha: '06/10/2020',
          fechaRiego: '06/08/2020',
          estadoRiego: true,
          cosechado: true,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idProducto: 18,
          idHuerto: 1,
          fechaSiembra: '06/08/2020',
          fechaCosecha: '06/10/2020',
          fechaRiego: '06/08/2020',
          estadoRiego: true,
          cosechado: true,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idProducto: 19,
          idHuerto: 1,
          fechaSiembra: '06/08/2020',
          fechaCosecha: '25/10/2020',
          fechaRiego: '06/08/2020',
          estadoRiego: true,
          cosechado: true,
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          idProducto: 20, 
          idHuerto: 1,
          fechaSiembra: '04/08/2020',
          fechaCosecha: '15/09/2020',
          fechaRiego: '04/08/2020',
          estadoRiego: true,
          cosechado: true,
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      // 
      {
          idProducto: 1,
          idHuerto: 2,
          fechaSiembra: '03/08/2020',
          fechaCosecha: '03/08/2030',
          fechaRiego: '03/08/2020',
          estadoRiego: true,
          cosechado: true,
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          idProducto: 1,
          idHuerto: 3,
          fechaSiembra: '31/07/2020',
          fechaCosecha: '31/07/2030',
          fechaRiego: '31/07/2020',
          estadoRiego: true,
          cosechado: true,
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
      }
    ], {});
  
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Siembras', null, {});
    
  }
};
