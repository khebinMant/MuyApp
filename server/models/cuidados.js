'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cuidados = sequelize.define('Cuidados', {
    frecuenciaRiego: DataTypes.INTEGER,
    cantidadRiego: DataTypes.INTEGER,
    resistenciaFrio: DataTypes.STRING,
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true
    }
  }, {});
  Cuidados.associate = function(models) {
    Cuidados.belongsTo(models.Productos,{
      foreignKey:{
        type:DataTypes.INTEGER,
        name: 'idProducto',
        allowNull: false,
        unique:false
      },
      targetKey: 'id'
    })
  };
  return Cuidados;
};