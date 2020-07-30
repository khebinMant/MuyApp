'use strict';
module.exports = (sequelize, DataTypes) => {
  const Condiciones = sequelize.define('Condiciones', {
    exposicionSol: DataTypes.STRING,
    tipoSuelo: DataTypes.STRING,
    espacioRecomendado: DataTypes.INTEGER,
    profundidadSemilla: DataTypes.INTEGER
  }, {});
  Condiciones.associate = function(models) {
    Condiciones.hasMany(models.Productos,{
      foreignKey:{
        type: DataTypes.INTEGER,
        name: 'idCondicion',
        allowNull: false,
        unique: false
      },
      sourceKey:'id'
    })
  };
  return Condiciones;
};