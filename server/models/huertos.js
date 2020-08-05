'use strict';
module.exports = (sequelize, DataTypes) => {
  const Huertos = sequelize.define('Huertos', 
    {
      detalle: DataTypes.STRING,
      region: DataTypes.STRING,
      fruta: DataTypes.BOOLEAN,
      legumbre: DataTypes.BOOLEAN,
      hierba: DataTypes.BOOLEAN,
      estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: true
      }
    }
  , {});
  Huertos.associate = function(models) {
    Huertos.hasMany(models.Siembras,{
      foreignKey:{
        type: DataTypes.INTEGER,
        name: 'idHuerto',
        allowNull: false,
        unique: false
      },
      sourceKey: 'id'
    }),
    Huertos.belongsTo(models.Personas,{
      foreignKey:{
        type: DataTypes.INTEGER,
        name: 'idPersona',
        allowNull: false,
        unique: false
      },
      targetKey: 'id'
    })
  };
  return Huertos;
};