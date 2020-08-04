'use strict';
module.exports = (sequelize, DataTypes) => {
  const Condiciones = sequelize.define('Condiciones', {
    tipoSuelo: DataTypes.STRING,
    espacioRecomendado: DataTypes.INTEGER,
    profundidadSemilla: DataTypes.INTEGER,
    estado:{
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true
    }
  }, {});
  Condiciones.associate = function(models) {
    Condiciones.belongsTo(models.Productos,{
      foreignKey:{
        type: DataTypes.INTEGER,
        name: 'idProducto',
        allowNull: false,
        unique: false
      },
      targetKey:'id'
    })
  };
  return Condiciones;
};