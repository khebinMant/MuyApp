'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Condiciones', [
            //manzana
            {
                tipoSuelo: 'Arenoso Fértil',
                espacioRecomendado: 100,
                profundidadSemilla: 5,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()

            },
            //pera
            {
                tipoSuelo: 'Arcilloso Caliza Humus Arenoso',
                espacioRecomendado: 80,
                profundidadSemilla: 3,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            //uva
            {
                tipoSuelo: 'Calizos de Baja Fertilidad',
                espacioRecomendado: 80,
                profundidadSemilla: 1,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            //sandia
            {
                tipoSuelo: 'Franco Arenoso Lómico',
                espacioRecomendado: 200,
                profundidadSemilla: 1,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            //melon
            {
                tipoSuelo: 'Franco Arcilloso',
                espacioRecomendado: 200,
                profundidadSemilla: 2,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            //papaya
            {
                tipoSuelo: 'Limoso Humus',
                espacioRecomendado: 180,
                profundidadSemilla: 3,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            //fresa
            {
                tipoSuelo: 'Franco Arenoso',
                espacioRecomendado: 100,
                profundidadSemilla: 5,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            //mandarina
            {
                tipoSuelo: 'Turba Humus',
                espacioRecomendado: 150,
                profundidadSemilla: 5,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            //durazno
            {
                tipoSuelo: 'Franco Arcilloso o Arenoso',
                espacioRecomendado: 180,
                profundidadSemilla: 6,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            //mora
            {
                tipoSuelo: 'Franco Arcilloso',
                espacioRecomendado: 100,
                profundidadSemilla: 8,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});

    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('Condiciones', null, {});

    }
};