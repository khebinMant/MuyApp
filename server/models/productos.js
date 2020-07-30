'use strict';
module.exports = (sequelize, DataTypes) => {
  const Productos = sequelize.define('Productos', {
    categoria: DataTypes.STRING,
    nombreComun: DataTypes.STRING,
    nombreCientifico: DataTypes.STRING,
    imagen: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    dificultad: DataTypes.STRING,
    temporada: DataTypes.STRING
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
    Productos.belongsTo(models.Condiciones,{
      foreignKey:{
        type: DataTypes.INTEGER,
        name: 'idCondicion',
        allowNull:false,
        unique: false
      },
      targetKey: 'id'
    }),
    Productos.belongsTo(models.Cuidados,{
      foreignKey:{
        type: DataTypes.INTEGER,
        name: 'idCuidado',
        allowNull:false,
        unique: false
      },
      targetKey: 'id'
    })
  };
  return Productos;
};