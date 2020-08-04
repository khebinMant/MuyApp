'use strict';
module.exports = (sequelize, DataTypes) => {
  const Productos = sequelize.define('Productos', {
    categoria: DataTypes.STRING,
    nombreComun: DataTypes.STRING,
    nombreCientifico: DataTypes.STRING,
    imagen: DataTypes.STRING,
    dificultad: DataTypes.STRING,
    fechaCosecha: DataTypes.DECIMAL,
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true
    }
  }, {});
  Productos.associate = function(models) {
    Productos.hasMany(models.Siembras,{
      foreignKey:{
        type: DataTypes.INTEGER,
        name: 'idProducto',
        allowNull: false,
        unique: false
      },
      sourceKey:'id'
    }),
    Productos.hasMany(models.Condiciones,{
      foreignKey:{
        type: DataTypes.INTEGER,
        name: 'idProducto',
        allowNull:false,
        unique: false
      },
      sourceKey: 'id'
    }),
    Productos.hasMany(models.Cuidados,{
      foreignKey:{
        type: DataTypes.INTEGER,
        name: 'idProducto',
        allowNull:false,
        unique: false
      },
      sourceKey: 'id'
    })
  };
  return Productos;
};