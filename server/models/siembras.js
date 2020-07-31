'use strict';
module.exports = (sequelize, DataTypes) => {
  const Siembras = sequelize.define('Siembras', 
  {
    fechaSiembra: DataTypes.DATE,
    fechaCosecha: DataTypes.DATE,
    estadoRiego: DataTypes.BOOLEAN,
    cosechado: DataTypes.BOOLEAN,
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true
    }
  }
  , {});
  Siembras.associate = function(models) {
    Siembras.belongsTo(models.Productos,{
      foreignKey:{
        type: DataTypes.INTEGER,
        name: 'idProducto',
        allowNull:false,
        unique:false
      },
      targetKey: 'id'
    }),
    Siembras.belongsTo(models.Huertos,{
      foreignKey:{
        type: DataTypes.INTEGER,
        name: 'idHuerto',
        allowNull:false,
        unique:false
      },
      targetKey: 'id'
    })
  };
  return Siembras;
};