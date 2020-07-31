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
        descripcion: 'La manzana es el fruto comestible de la especie Malus domestica, llamada comúnmente manzano. Es una fruta pomácea de forma redonda y sabor más o menos dulce, dependiendo de la variedad.',
        dificultad: 'Medio',
        fechaCosecha: 5,
        estado:true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
 
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Productos', null, {});
    
  }
};
