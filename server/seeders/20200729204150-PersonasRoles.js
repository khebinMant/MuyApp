'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('PersonasRoles', [
        //Kevin
        {
          idPersona:1,
          idRol:2,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Henry
        {
          idPersona:2,
          idRol:2,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Jazmin
        {
          idPersona:3,
          idRol:2,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Pedro
        {
          idPersona:4,
          idRol:1,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Juan
        {
          idPersona:5,
          idRol:1,
          estado:true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('PersonasRoles', null, {});

  }
};
