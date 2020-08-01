'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Condiciones', [{
                exposicionSol: '',
                tipoSuelo: 'Arenoso Fértil',
                espacioRecomendado: 100,
                profundidadSemilla: 5,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                exposicionSol: '',
                tipoSuelo: 'Arcilloso Caliza Humus Arenoso',
                espacioRecomendado: 80,
                profundidadSemilla: 3,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                exposicionSol: '',
                tipoSuelo: 'Calizos de Baja Fertilidad',
                espacioRecomendado: 80,
                profundidadSemilla: 1,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                exposicionSol: '',
                tipoSuelo: 'Franco Arenoso Lómico',
                espacioRecomendado: 200,
                profundidadSemilla: 1,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                exposicionSol: '',
                tipoSuelo: 'Franco Arcilloso',
                espacioRecomendado: 200,
                profundidadSemilla: 2,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                exposicionSol: '',
                tipoSuelo: 'Limoso Humus',
                espacioRecomendado: 180,
                profundidadSemilla: 3,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                exposicionSol: '',
                tipoSuelo: 'Franco Arenoso',
                espacioRecomendado: 100,
                profundidadSemilla: 5,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                exposicionSol: '',
                tipoSuelo: 'Turba Humus',
                espacioRecomendado: 150,
                profundidadSemilla: 5,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                exposicionSol: '',
                tipoSuelo: 'Franco Arcilloso o Arenoso',
                espacioRecomendado: 180,
                profundidadSemilla: 6,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                exposicionSol: '',
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