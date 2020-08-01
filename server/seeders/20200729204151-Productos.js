'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Productos', [
      {
        idCuidado: 1,
        idCondicion:1,
        categoria: 'Fruta',
        nombreComun: 'Manzana',
        nombreCientifico: 'Malus domestica',
        imagen: 'url de la imagen',
        dificultad: 'Medio',
        fechaCosecha: 5,
        estado:true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      /*
      {
        idCuidado: 11,
        idCondicion: 11,
        categoria: 'Legumbre',
        nombreComun: 'Acelga',
        nombreCientifico: 'Beta vulgaris var. cicla',
        imagen: 'url de la imagen',
        dificultad: 'Facil',
        fechaCosecha: 70,
        estado:true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCuidado: 12,
        idCondicion: 12,
        categoria: 'Legumbre',
        nombreComun: 'Apio',
        nombreCientifico: 'Apium graveolens',
        imagen: 'url de la imagen',
        dificultad: 'Medio',
        fechaCosecha: 120,
        estado:true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCuidado: 13,
        idCondicion: 13,
        categoria: 'Legumbre',
        nombreComun: 'Berenjena',
        nombreCientifico: 'Solanum melongena',
        imagen: 'url de la imagen',
        dificultad: 'Facil',
        fechaCosecha: 60,
        estado:true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCuidado: 14,
        idCondicion: 14,
        categoria: 'Legumbre',
        nombreComun: 'Brocoli',
        nombreCientifico: 'Brassica oleracea var. italica',
        imagen: 'url de la imagen',
        dificultad: 'Medio',
        fechaCosecha: 80,
        estado:true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCuidado: 15,
        idCondicion: 15,
        categoria: 'Legumbre',
        nombreComun: 'Cebolla',
        nombreCientifico: 'Allium cepa',
        imagen: 'url de la imagen',
        dificultad: 'Facil',
        fechaCosecha: 160,
        estado:true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCuidado: 16,
        idCondicion: 16,
        categoria: 'Legumbre',
        nombreComun: 'Coliflor',
        nombreCientifico: 'Brassica oleracea var. botrytis',
        imagen: 'url de la imagen',
        dificultad: 'Medio',
        fechaCosecha: 180,
        estado:true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCuidado: 17,
        idCondicion: 17,
        categoria: 'Legumbre',
        nombreComun: 'Espinaca',
        nombreCientifico: 'Spinacia oleracea',
        imagen: 'url de la imagen',
        dificultad: 'Facil',
        fechaCosecha: 60,
        estado:true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCuidado: 18,
        idCondicion: 18,
        categoria: 'Legumbre',
        nombreComun: 'Lechuga',
        nombreCientifico: 'Lactuca sativa',
        imagen: 'url de la imagen',
        dificultad: 'Medio',
        fechaCosecha: 60,
        estado:true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCuidado: 19,
        idCondicion: 19,
        categoria: 'Legumbre',
        nombreComun: 'Papa',
        nombreCientifico: 'Solanum tuberosum',
        imagen: 'url de la imagen',
        dificultad: 'Facil',
        fechaCosecha: 80,
        estado:true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCuidado: 29,
        idCondicion: 20,
        categoria: 'Legumbre',
        nombreComun: 'Rabano',
        nombreCientifico: 'Raphanus sativus',
        imagen: 'url de la imagen',
        dificultad: 'Facil',
        fechaCosecha: 42,
        estado:true,
        createdAt: new Date(),
        updatedAt: new Date()
      }*/
    ], {});
 
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Productos', null, {});
    
  }
};
