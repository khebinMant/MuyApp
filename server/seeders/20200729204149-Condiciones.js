'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Condiciones', [
        //Frutas Manzana 1
        {
          idProducto:1,
          tipoSuelo: 'Arenoso Fértil',
          espacioRecomendado: 100,
          profundidadSemilla: 5,
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      //Pera 2
      {
          idProducto:2,
          tipoSuelo: 'Arcilloso Caliza Humus Arenoso',
          espacioRecomendado: 80,
          profundidadSemilla: 3,
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
      }, 
      // Uva 3
      {
          idProducto:3,
          tipoSuelo: 'Calizos de Baja Fertilidad',
          espacioRecomendado: 80,
          profundidadSemilla: 1,
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      //Sandia 4
      {
          idProducto:4,
          tipoSuelo: 'Franco Arenoso Lómico',
          espacioRecomendado: 200,
          profundidadSemilla: 1,
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      //Melon 5
      {
          idProducto:5,
          tipoSuelo: 'Franco Arcilloso',
          espacioRecomendado: 200,
          profundidadSemilla: 2,
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      //Papaya 6
      {
          idProducto:6,
          tipoSuelo: 'Limoso Humus',
          espacioRecomendado: 180,
          profundidadSemilla: 3,
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      //Fresa 7
      {
          idProducto:7,
          tipoSuelo: 'Franco Arenoso',
          espacioRecomendado: 100,
          profundidadSemilla: 5,
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      //Mandarina 8
      {
          idProducto:8,
          tipoSuelo: 'Turba Humus',
          espacioRecomendado: 150,
          profundidadSemilla: 5,
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      //Durazno 9
      {
          idProducto:9,
          tipoSuelo: 'Franco Arcilloso o Arenoso',
          espacioRecomendado: 180,
          profundidadSemilla: 6,
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      //Mora 10
      {
          idProducto:10,
          tipoSuelo: 'Franco Arcilloso',
          espacioRecomendado: 100,
          profundidadSemilla: 8,
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
        //Legumbres condiciones  11 Acelga
        {
          idProducto:11,
          tipoSuelo: 'Arcilloso Arenoso',
          espacioRecomendado: 60,
          profundidadSemilla: 2,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Legumbres condiciones  12 Apio
        {
          idProducto:12,
          tipoSuelo: 'Arcilloso Arenoso',
          espacioRecomendado: 60,
          profundidadSemilla: 2,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Legumbres condiciones  13 Berenjena
        {
          idProducto:13,
          tipoSuelo: 'Humus Drenado',
          espacioRecomendado: 100,
          profundidadSemilla: 1,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Legumbres condiciones  14 Brocoli
        {
          idProducto:14,
          tipoSuelo: 'Arcilloso Caliza Humus, drenado',
          espacioRecomendado: 120,
          profundidadSemilla: 1,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Legumbres condiciones  15 Cebolla
        {
          idProducto:15,
          tipoSuelo: 'Arenoso Caliza,drenado',
          espacioRecomendado: 20,
          profundidadSemilla: 10,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Legumbres condiciones  16 Coliflor
        {
          idProducto:16,
          tipoSuelo: 'Arcilloso Caliza Humus,drenado',
          espacioRecomendado: 140,
          profundidadSemilla: 1,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Legumbres condiciones  17 Espinaca
        {
          idProducto:17,
          tipoSuelo: 'Arcilloso Humus,drenado',
          espacioRecomendado: 30,
          profundidadSemilla: 3,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Legumbres condiciones  18 Lechuga
        {
          idProducto:18,
          tipoSuelo: 'Arcilloso Arenoso',
          espacioRecomendado: 50,
          profundidadSemilla: 1,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Legumbres condiciones  19 Papa
        {
          idProducto:19,
          tipoSuelo: 'Arcilloso Arenoso,drenado',
          espacioRecomendado: 70,
          profundidadSemilla: 13,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Legumbres condiciones  20 Rabano
        {
          idProducto:20,
          tipoSuelo: 'Humus Arenoso,drenado',
          espacioRecomendado: 20,
          profundidadSemilla: 1,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //HIERBAS
        //Hierbas condiciones 21
        //hierbas condiciones  21 Manzanilla
        {
          idProducto:21,
          tipoSuelo: 'Drenado',
          espacioRecomendado: 30,
          profundidadSemilla: 4,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
          //hierbas condiciones  22 Aloe Vera
        {
          idProducto:22,
          tipoSuelo: 'Arenosos, arcillosos, drenados',
          espacioRecomendado: 50,
          profundidadSemilla: 6,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //hierbas condiciones  23 Jengibre
        {
          idProducto:23,
          tipoSuelo: 'arcillosos',
          espacioRecomendado: 10,
          profundidadSemilla: 4,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //hierbas condiciones  24 Tomillo
        {
          idProducto:24,
          tipoSuelo: 'Humus Drenado',
          espacioRecomendado: 30,
          profundidadSemilla: 5,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //hierbas condiciones  25 Diente de leon
        {
          idProducto:25,
          tipoSuelo: 'Humus Drenado',
          espacioRecomendado: 10,
          profundidadSemilla: 3,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //hierbas condiciones  26 Oregano
        {
          idProducto:26,
          tipoSuelo: 'Humus Drenado',
          espacioRecomendado: 40,
          profundidadSemilla:3,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
          //hierbas condiciones  27 Eneldo
        {
          idProducto:27,
          tipoSuelo: 'Arenosos',
          espacioRecomendado: 23,
          profundidadSemilla: 3,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //hierbas condiciones  28 Curcuma
        {
          idProducto:28,
          tipoSuelo: 'Humus Drenado',
          espacioRecomendado: 40,
          profundidadSemilla: 4,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
          //hierbas condiciones  29 Perejil
        {
          idProducto:29,
          tipoSuelo: 'Humus Drenado',
          espacioRecomendado: 30,
          profundidadSemilla: 2,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //hierbas condiciones  29 Menta
        {
          idProducto:30,
          tipoSuelo: 'Humus Drenado',
          espacioRecomendado: 20,
          profundidadSemilla: 5,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Condiciones', null, {});
    
  }
};
