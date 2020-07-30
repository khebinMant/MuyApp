'use strict';
module.exports = (sequelize, DataTypes) => {
  const Configuraciones = sequelize.define('Configuraciones', {
    region: DataTypes.STRING,
    fruta: DataTypes.BOOLEAN,
    legumbre: DataTypes.BOOLEAN,
    hierba: DataTypes.BOOLEAN
  }, {});
  Configuraciones.associate = function(models) {
    Configuraciones.belongsTo(models.Usuario,{
      foreignKey:{
        type: DataTypes.INTEGER,
        name: 'idUsuario',
        allowNull: false,
        unique: false
      },
      targetKey:'id'
    })
  };
  return Configuraciones;
};