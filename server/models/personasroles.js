'use strict';
module.exports = (sequelize, DataTypes) => {
  const PersonasRoles = sequelize.define('PersonasRoles', {
    estado: DataTypes.BOOLEAN
  }, {});
  PersonasRoles.associate = function(models) {
    PersonasRoles.belongsTo(models.Personas,{
      foreignKey:{
        type: DataTypes.INTEGER,
        name: 'idPersona',
        allowNull: false,
        unique: false
      },
      targetKey:'id'
    })
    PersonasRoles.belongsTo(models.Roles,{
      foreignKey:{
        type: DataTypes.INTEGER,
        name: 'idRol',
        allowNull: false,
        unique: false
      },
      targetKey:'id'
    })
    PersonasRoles.hasMany(models.Huertos,{
      foreignKey:{
        type: DataTypes.INTEGER,
        name: 'idPersonaRol',
        allowNull: false,
        unique: false
      },
      sourceKey: 'id'
    })
  };
  return PersonasRoles;
};