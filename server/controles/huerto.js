;
const Sequelize = require('sequelize')
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env]
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
let modelos = require('../models')
let Op = Sequelize.Op;



let crearHuertos = (req, res) => {

    let data = req.body.data

    data.estado = true
    data.createdAt = new Date(Date.now())
    data.updatedAt = new Date(Date.now())

    modelos.Huertos.create(data)
    .then(respuesta => {
        console.log(respuesta.dataValues)
        res.status(200).json({
            transaccion: true,
            data: [respuesta.dataValues],
            msg: data.length
        })
    })
    .catch(err => {
        console.log(err)
        let errors = []
        let msg = ''
        if (err.parent) {
            errors.push(err.parent.detail)
            msg = 'Registro duplicado'
        }
        if (err.errors.length > 0) {
            err.errors.forEach(element => {
                errors.push(element.path)
            });
            msg = 'Datos no validos'
        }
        res.status(400).json({
            transaccion: false,
            data: errors,
            msg: msg
        })
    })
}

let traerHuertos = (req, res) => {
    
    let data = req.body.data
    let idPersona = req.body.idPersona
    modelos.Huertos.findOne({
        where: {
            idPersona: idPersona
        }
    }).then(data => {
        return res.status(200).json({
            transaccion: true,
            data: data,
            msg: data.length
        })
    }).catch(err => {
        return res.status(500).json({
            transaccion: false,
            data: null,
            msg: 'Error del servidor'
        })
    })
} 


module.exports = {
    crearHuertos,
    traerHuertos
}