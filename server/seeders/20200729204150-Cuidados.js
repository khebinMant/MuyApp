'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

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

    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('Cuidados', null, {});

    }
};