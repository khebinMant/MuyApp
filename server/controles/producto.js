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

let crearProducto = (req, res) => {
    console.log("entre a crear prpducto")
    let data = req.body.data
    console.log(data)

    data.estado = true
    data.createdAt = new Date(Date.now())
    data.updatedAt = new Date(Date.now())
    console.log(data)

    modelos.Productos.create(data)
    .then(respuesta => {
        res.status(200).json({
            transaccion: true,
            data: [respuesta.dataValues],
            msg: data.length
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            transaccion: false,
            data: err,
            msg: 'Servidor no disponible'
        })
    })
}


let crearCondicion = (req, res) => {

    let data = req.body.data
    data.estado = true
    data.createdAt = new Date(Date.now())
    data.updatedAt = new Date(Date.now())

    modelos.Condiciones.create(data)
    .then(respuesta => {
        console.log(respuesta.dataValues)
        res.status(200).json({
            transaccion: true,
            data: [respuesta.dataValues],
            msg: data.length
        })
    })
    .catch(err => {
        res.status(500).json({
            transaccion: false,
            data: err,
            msg: 'Servidor no disponible'
        })
    })
}

let crearCuidado = (req, res) => {

    let data = req.body.data
    data.estado = true
    data.createdAt = new Date(Date.now())
    data.updatedAt = new Date(Date.now())

    modelos.Cuidados.create(data)
    .then(respuesta => {
        console.log(respuesta.dataValues)
        res.status(200).json({
            transaccion: true,
            data: [respuesta.dataValues],
            msg: data.length
        })
    })
    .catch(err => {
        res.status(500).json({
            transaccion: false,
            data: err,
            msg: 'Servidor no disponible'
        })
    })
}


let traerProductos = (req, res) => {
    modelos.Productos.findAll({
        attributes: {
            exclude: [
                'estado'
            ],
            where:{
                estado: true
            },
        },
        include:[
            {
                model:modelos.Cuidados,
                required: true
            },
            {
                model:modelos.Condiciones,
                required: true
            }
        ]
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
    traerProductos,
    crearProducto,
    crearCondicion,
    crearCuidado
}