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

let añadirSiembra = (req, res) => {

    let data = req.body.data

    data.estado = true
    data.createdAt = new Date(Date.now())
    data.updatedAt = new Date(Date.now())
    data.fechaSiembra = new Date(Date.now())

    modelos.Siembras.create(data)
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

let traerSiembras = (req, res) => {

    let data = req.body.data
    console.log(data)
    console.log("entre a bsucar siembras")
    modelos.Siembras.findAll({
        where:{
            "idHuerto": data.id,
            "estado":true
        },
        include:[
            {
                model:modelos.Productos,
                required: true,
                include:[
                    {
                        model:modelos.Condiciones,
                        required:true
                    },
                    {
                        model:modelos.Cuidados,
                        required:true
                    }
                ]
            },
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
let eliminarSiembra =(req,res)=>{
    let data = req.body.data
    data.estado = false
    modelos.Siembras.update(data,{
        where:{
                id:data.id,
                idHuerto:data.idHuerto,
                idProducto:data.idProducto
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
    añadirSiembra,
    traerSiembras,
    eliminarSiembra
}