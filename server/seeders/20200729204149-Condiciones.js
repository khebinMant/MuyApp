'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Condiciones', [
        {
          exposicionSol: 'Soleado o con un poco de sombra',
          tipoSuelo: 'Arcilloso Caliza Humus Arenoso',
          espacioRecomendado: 80,
          profundidadSemilla: 3,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Legumbres condiciones  11 Acelga
        {
          exposicionSol: 'Soleado o con un poco de sombra',
          tipoSuelo: 'Arcilloso Arenoso',
          espacioRecomendado: 60,
          profundidadSemilla: 2,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Legumbres condiciones  12 Apio
        {
          exposicionSol: 'Soleado o con un poco de sombra',
          tipoSuelo: 'Arcilloso Arenoso',
          espacioRecomendado: 60,
          profundidadSemilla: 2,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Legumbres condiciones  13 Berenjena
        {
          exposicionSol: 'Soleada',
          tipoSuelo: 'Humus Drenado',
          espacioRecomendado: 100,
          profundidadSemilla: 1,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Legumbres condiciones  14 Brocoli
        {
          exposicionSol: 'Soleada o con un poco de sombra',
          tipoSuelo: 'Arcilloso Caliza Humus, drenado',
          espacioRecomendado: 120,
          profundidadSemilla: 1,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Legumbres condiciones  15 Cebolla
        {
          exposicionSol: 'Soleada',
          tipoSuelo: 'Arenoso Caliza,drenado',
          espacioRecomendado: 20,
          profundidadSemilla: 10,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Legumbres condiciones  16 Coliflor
        {
          exposicionSol: 'Soleada o con un poco de sombra',
          tipoSuelo: 'Arcilloso Caliza Humus,drenado',
          espacioRecomendado: 140,
          profundidadSemilla: 1,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Legumbres condiciones  17 Espinaca
        {
          exposicionSol: 'Soleada o con un poco de sombra',
          tipoSuelo: 'Arcilloso Humus,drenado',
          espacioRecomendado: 30,
          profundidadSemilla: 3,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Legumbres condiciones  18 Lechuga
        {
          exposicionSol: 'Soleada',
          tipoSuelo: 'Arcilloso Arenoso',
          espacioRecomendado: 50,
          profundidadSemilla: 1,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Legumbres condiciones  19 Papa
        {
          exposicionSol: 'Soleada',
          tipoSuelo: 'Arcilloso Arenoso,drenado',
          espacioRecomendado: 70,
          profundidadSemilla: 13,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Legumbres condiciones  20 Rabano
        {
          exposicionSol: 'Soleada o con un poco de sombra',
          tipoSuelo: 'Humus Arenoso,drenado',
          espacioRecomendado: 20,
          profundidadSemilla: 1,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
        //Hierbas condiciones 21
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Condiciones', null, {});
    
  }
};
