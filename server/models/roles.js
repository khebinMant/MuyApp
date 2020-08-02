'use strict';
module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define('Roles', {
    rol: DataTypes.STRING,
    estado: DataTypes.BOOLEAN
  }, {});
  Roles.associate = function(models) {
    Roles.hasMany(models.PersonasRoles,{
      foreignKey:{
        type: DataTypes.INTEGER,
        name: 'idRol',
        allowNull: false,
        unique: false
      },
      sourceKey: 'id'
    })
  };
  return Roles;
};