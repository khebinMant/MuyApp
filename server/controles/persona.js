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

// Estudiante

let login = (req, res) => {

    let correoElectronico = req.body.correoElectronico
    let psw = req.body.psw
    modelos.Personas.findOne({
        where: {
            correoElectronico: correoElectronico,
            psw: psw
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
            msg: 'Persona no registrada'
        })
    })
}   

let crearPersona = (req, res) => {

    let data = req.body.data

    data.estado = true
    data.createdAt = new Date(Date.now())
    data.updatedAt = new Date(Date.now())

    //Crear a la persona
    modelos.Personas.create(data)
    .then(respuesta => {
        res.status(200).json({
            transaccion: true,
            data: [respuesta.dataValues],
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


let buscarPersona = (req, res) => {
    
    let correoElectronico = req.body.data.correoElectronico
    let contraseña = req.body.data.contraseña
    modelos.Personas.findAll({
        where: {
            correoElectronico: correoElectronico,
            contraseña: contraseña
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


let crearRolPersona = (req, res) => {

    let data = req.body.data

    data.estado = true
    data.createdAt = new Date(Date.now())
    data.updatedAt = new Date(Date.now())

    //Crear a la persona
    modelos.PersonasRoles.create(data)
    .then(respuesta => {
        res.status(200).json({
            transaccion: true,
            data: [respuesta.dataValues],
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

let traerPersonas = (req, res) => {
    modelos.Personas.findAll({
        attributes: {
            exclude: [
                'estado'
            ],
            where:{
                estado: true
            }
        }
    }).then(respuesta => {
        res.status(200).json({
            transaccion: true,
            data: respuesta,
            msg: respuesta.length
        }) 
    }).catch(err => {
        res.status(500).json({
            transaccion: false,
            data: err,
            msg: 'Servidor no disponible'
        })
    })
}

module.exports = {
    login,
    crearRolPersona,
    crearPersona,
    traerPersonas,
    buscarPersona
}