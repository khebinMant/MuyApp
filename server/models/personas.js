'use strict';
module.exports = (sequelize, DataTypes) => {
  const Personas = sequelize.define('Personas', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    correoElectronico: DataTypes.STRING,
    psw: DataTypes.STRING,
    foto: DataTypes.STRING,
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true
    }
  }, {});
  Personas.associate = function(models) {
    Personas.hasMany(models.PersonasRoles,{
      foreignKey:{
        type: DataTypes.INTEGER,
        name: 'idPersona',
        allowNull: false,
        unique: false
      },
      sourceKey: 'id'
    })
    Personas.hasMany(models.Huertos,{
      foreignKey:{
        type: DataTypes.INTEGER,
        name: 'idPersona',
        allowNull: false,
        unique: false
      },
      sourceKey: 'id'
    })
  };
  return Personas;
};