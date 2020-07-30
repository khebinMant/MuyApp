'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    correoElectronico: DataTypes.STRING,
    contraseña: DataTypes.STRING
  }, {});
  Usuario.associate = function(models) {
    Usuario.hasMany(models.Huertos,{
      foreignKey:{
        type: DataTypes.INTEGER,
        name: 'idUsuario',
        allowNull: false,
        unique: false
      },
      sourceKey: 'id'
    }),
    Usuario.hasOne(models.Configuraciones,{
      foreignKey:{  
        typoe: DataTypes.INTEGER,
        name: 'idUsuario',
        allowNull:false,
        unique:false
      },
      sourceKey:'id'
    })
  };
  return Usuario;
};