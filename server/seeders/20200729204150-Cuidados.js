'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Cuidados', [
        {
          frecuenciaRiego: 3,
          cantidadRiego: 200,
          resistenciaFrio: 'debil',
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Cuidados Legumbre 11 Acelga
        {
          frecuenciaRiego: 3,
          cantidadRiego: 200,
          resistenciaFrio: 'Elevada',
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Cuidados Legumbre 12 Apio
        {
          frecuenciaRiego: 5,
          cantidadRiego: 300,
          resistenciaFrio: 'Elevada',
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Cuidados Legumbre 13 Berenjena
        {
          frecuenciaRiego: 2,
          cantidadRiego: 200,
          resistenciaFrio: 'Debil',
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Cuidados Legumbre 14 Brocoli
        {
          frecuenciaRiego: 4,
          cantidadRiego: 250,
          resistenciaFrio: 'Medio',
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Cuidados Legumbre 15 Cebolla
        {
          frecuenciaRiego: 1,
          cantidadRiego: 250,
          resistenciaFrio: 'Elevada',
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Cuidados Legumbre 16 Coliflor
        {
          frecuenciaRiego: 7,
          cantidadRiego: 250,
          resistenciaFrio: 'Media',
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Cuidados Legumbre 17 Espinaca
        {
          frecuenciaRiego: 3,
          cantidadRiego: 200,
          resistenciaFrio: 'Elevada',
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Cuidados Legumbre 18 Lechuga
        {
          frecuenciaRiego: 5,
          cantidadRiego: 250,
          resistenciaFrio: 'Elevada',
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Cuidados Legumbre 19 Papa
        {
          frecuenciaRiego: 3,
          cantidadRiego: 300,
          resistenciaFrio: 'Debil',
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Cuidados Legumbre 20 Rabano
        {
          frecuenciaRiego: 5,
          cantidadRiego: 250,
          resistenciaFrio: 'Elevada',
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
        //Cuidados hierba 21

    ], {});
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Cuidados', null, {});
    
  }
};
