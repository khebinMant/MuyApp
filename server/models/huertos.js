'use strict';
module.exports = (sequelize, DataTypes) => {
  const Huertos = sequelize.define('Huertos', 
    {
      detalle: DataTypes.STRING
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
    Huertos.belongsTo(models.Usuario,{
      foreignKey:{
        type: DataTypes.INTEGER,
        name: 'idUsuario',
        allowNull: false,
        unique: false
      },
      targetKey: 'id'
    })
  };
  return Huertos;
};