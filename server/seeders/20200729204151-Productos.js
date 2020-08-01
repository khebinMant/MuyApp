'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Productos', [{
                idCuidado: 1,
                idCondicion: 1,
                categoria: 'Fruta',
                nombreComun: 'Manzana',
                nombreCientifico: 'Malus domestica',
                imagen: 'url de la imagen',
                dificultad: 'Medio',
                fechaCosecha: 10,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                idCuidado: 2,
                idCondicion: 2,
                categoria: 'Fruta',
                nombreComun: 'Pera',
                nombreCientifico: 'Pyrus commusnis',
                imagen: 'url de la imagen',
                dificultad: 'Medio',
                fechaCosecha: 6,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                idCuidado: 3,
                idCondicion: 3,
                categoria: 'Fruta',
                nombreComun: 'Uva',
                nombreCientifico: 'Vitis',
                imagen: 'url de la imagen',
                dificultad: 'Facil',
                fechaCosecha: 3,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                idCuidado: 4,
                idCondicion: 4,
                categoria: 'Fruta',
                nombreComun: 'Sandia',
                nombreCientifico: 'Citrullus lanatus',
                imagen: 'url de la imagen',
                dificultad: 'Facil',
                fechaCosecha: 90,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                idCuidado: 5,
                idCondicion: 5,
                categoria: 'Fruta',
                nombreComun: 'Melón',
                nombreCientifico: 'Cucumis melo',
                imagen: 'url de la imagen',
                dificultad: 'Dificil',
                fechaCosecha: 120,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                idCuidado: 6,
                idCondicion: 6,
                categoria: 'Papaya',
                nombreCientifico: 'Carica papaya',
                imagen: 'url de la imagen',
                dificultad: 'Facil',
                fechaCosecha: 360,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                idCuidado: 7,
                idCondicion: 7,
                categoria: 'Fruta',
                nombreComun: 'Fresa',
                nombreCientifico: 'Fragaria',
                imagen: 'url de la imagen',
                dificultad: 'Facil',
                fechaCosecha: 150,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                idCuidado: 8,
                idCondicion: 8,
                categoria: 'Fruta',
                nombreComun: 'Mandarina',
                nombreCientifico: 'Citrus reticulata',
                imagen: 'url de la imagen',
                dificultad: 'Medio',
                fechaCosecha: 1,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                idCuidado: 9,
                idCondicion: 9,
                categoria: 'Fruta',
                nombreComun: 'Durazno',
                nombreCientifico: 'Prunus persica',
                imagen: 'url de la imagen',
                dificultad: 'Dificil',
                fechaCosecha: 10,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                idCuidado: 10,
                idCondicion: 10,
                categoria: 'Fruta',
                nombreComun: 'Mora',
                nombreCientifico: 'Morus nigra',
                imagen: 'url de la imagen',
                dificultad: 'Facil',
                fechaCosecha: 180,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date()
            }

        ], {});

    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('Productos', null, {});

    }
};