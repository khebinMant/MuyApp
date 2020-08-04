'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

<<<<<<< HEAD
        return queryInterface.bulkInsert('Cuidados', [
            //manzana
            {
                frecuenciaRiego: 4,
                cantidadRiego: 1000,
                resistenciaFrio: 'Debil',
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            //pera
            {
                frecuenciaRiego: 5,
                cantidadRiego: 900,
                resistenciaFrio: 'Debil',
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            //uva
            {
                frecuenciaRiego: 5,
                cantidadRiego: 800,
                resistenciaFrio: 'Debil',
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            //sandia
            {
                frecuenciaRiego: 4,
                cantidadRiego: 1800,
                resistenciaFrio: 'Debil',
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            //melon
            {
                frecuenciaRiego: 3,
                cantidadRiego: 1500,
                resistenciaFrio: 'Debil',
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            //papaya
            {
                frecuenciaRiego: 5,
                cantidadRiego: 700,
                resistenciaFrio: 'Debil',
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            //fresa
            {
                frecuenciaRiego: 4,
                cantidadRiego: 500,
                resistenciaFrio: 'Fuerte',
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            //mandarina
            {
                frecuenciaRiego: 3,
                cantidadRiego: 1200,
                resistenciaFrio: 'Debil',
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            //durtazno
            {
                frecuenciaRiego: 3,
                cantidadRiego: 800,
                resistenciaFrio: 'Debil',
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            //mora
            {
                frecuenciaRiego: 3,
                cantidadRiego: 500,
                resistenciaFrio: 'Fuerte',
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
=======
      return queryInterface.bulkInsert('Cuidados', [
        // Frutas Manzana 1
        {
          idProducto:1,
          frecuenciaRiego: 4,
          cantidadRiego: 1000,
          resistenciaFrio: 'Debil',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      //Pera 2
      {
          idProducto:2,
          frecuenciaRiego: 5,
          cantidadRiego: 900,
          resistenciaFrio: 'Debil',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      // Uva 3
      {
          idProducto:3,
          frecuenciaRiego: 5,
          cantidadRiego: 800,
          resistenciaFrio: 'Debil',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      // Sandia 4
      {
          idProducto:4,
          frecuenciaRiego: 4,
          cantidadRiego: 1800,
          resistenciaFrio: 'Debil',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      //Melon 5
      {
          idProducto:5,
          frecuenciaRiego: 3,
          cantidadRiego: 1500,
          resistenciaFrio: 'Debil',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      //Papaya 6
      {
          idProducto:6,
          frecuenciaRiego: 5,
          cantidadRiego: 700,
          resistenciaFrio: 'Debil',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      // Fresa 7
      {
          idProducto:7,
          frecuenciaRiego: 4,
          cantidadRiego: 500,
          resistenciaFrio: 'Fuerte',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      //Mandarina 8
      {
          idProducto:8,
          frecuenciaRiego: 3,
          cantidadRiego: 1200,
          resistenciaFrio: 'Debil',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      //Durazno 9
      {
          idProducto:9,
          frecuenciaRiego: 3,
          cantidadRiego: 800,
          resistenciaFrio: 'Debil',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      //Mora 10
      {
          idProducto:10,
          frecuenciaRiego: 3,
          cantidadRiego: 500,
          resistenciaFrio: 'Fuerte',
          estado: true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
        //Cuidados Legumbre 11 Acelga
        {
          idProducto:11,
          frecuenciaRiego: 3,
          cantidadRiego: 200,
          resistenciaFrio: 'Elevada',
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Cuidados Legumbre 12 Apio
        {
          idProducto:12,
          frecuenciaRiego: 5,
          cantidadRiego: 300,
          resistenciaFrio: 'Elevada',
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Cuidados Legumbre 13 Berenjena
        {
          idProducto:13,
          frecuenciaRiego: 2,
          cantidadRiego: 200,
          resistenciaFrio: 'Debil',
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Cuidados Legumbre 14 Brocoli
        {
          idProducto:14,
          frecuenciaRiego: 4,
          cantidadRiego: 250,
          resistenciaFrio: 'Medio',
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Cuidados Legumbre 15 Cebolla
        {
          idProducto:15,
          frecuenciaRiego: 1,
          cantidadRiego: 250,
          resistenciaFrio: 'Elevada',
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Cuidados Legumbre 16 Coliflor
        {
          idProducto:16,
          frecuenciaRiego: 7,
          cantidadRiego: 250,
          resistenciaFrio: 'Media',
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Cuidados Legumbre 17 Espinaca
        {
          idProducto:17,
          frecuenciaRiego: 3,
          cantidadRiego: 200,
          resistenciaFrio: 'Elevada',
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Cuidados Legumbre 18 Lechuga
        {
          idProducto:18,
          frecuenciaRiego: 5,
          cantidadRiego: 250,
          resistenciaFrio: 'Elevada',
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Cuidados Legumbre 19 Papa
        {
          idProducto:19,
          frecuenciaRiego: 3,
          cantidadRiego: 300,
          resistenciaFrio: 'Debil',
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Cuidados Legumbre 20 Rabano
        {
          idProducto:20,
          frecuenciaRiego: 5,
          cantidadRiego: 250,
          resistenciaFrio: 'Elevada',
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },  
        //HIERBAS
       //hierbas condiciones  21 Manzanilla
        {
          idProducto:21,
          frecuenciaRiego: 4,
          cantidadRiego: 200,
          resistenciaFrio: 'elevada',
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      //hierbas condiciones  22 Aloe Vera
      {
          idProducto:22,
          frecuenciaRiego: 2,
          cantidadRiego: 200,
          resistenciaFrio: 'medio',
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      //hierbas condiciones  23 Jengibre
      {
          idProducto:23,
          frecuenciaRiego: 3,
          cantidadRiego: 200,
          resistenciaFrio: 'debil',
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      //hierbas condiciones  24 Tomillo
      {
          idProducto:24,
          frecuenciaRiego: 2,
          cantidadRiego: 200,
          resistenciaFrio: 'elevada ',
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      //hierbas condiciones  25 Diente de leon
      {
          idProducto:25,
          frecuenciaRiego: 2,
          cantidadRiego: 200,
          resistenciaFrio: 'elevada',
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      //hierbas condiciones  26 Oregano
      {
          idProducto:26,
          frecuenciaRiego: 2,
          cantidadRiego: 200,
          resistenciaFrio: 'elevada',
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      //hierbas condiciones  27 Eneldo
      {
        idProducto:27,
        frecuenciaRiego: 4,
        cantidadRiego: 250,
        resistenciaFrio: 'debil',
        estado:true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //hierbas condiciones  28 Curcuma
      {
        idProducto:28,
        frecuenciaRiego: 2,
        cantidadRiego: 200,
        resistenciaFrio: 'debil',
        estado:true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        //hierbas condiciones  29 Perejil
      {
        idProducto:29,
        frecuenciaRiego: 3,
        cantidadRiego: 200,
        resistenciaFrio: 'debil',
        estado:true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //hierbas condiciones  30 Menta
      {
        idProducto:30,
        frecuenciaRiego: 5,
        cantidadRiego: 250,
        resistenciaFrio: 'medio',
        estado:true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    
  },
>>>>>>> 7a4e8c313e3df82f58a355ddc3ba58372f884dce

    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('Cuidados', null, {});

    }
};