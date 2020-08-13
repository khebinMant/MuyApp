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


let login = (req, res) => {

    let correoElectronico = req.body.correoElectronico
    let psw = req.body.psw
    modelos.Personas.findOne({
        attributes:{
            exclude:[
                "estado",
                "createdAt",
                "updatedAt"
            ]
        },
        where: {
            correoElectronico: correoElectronico,
            psw: psw,
            confirmacion:true
        },
        include:[
            {
                model: modelos.PersonasRoles,
                required:true,
            }
        ]
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
let actualizarConfirmacion = (req, res) => {

    var html =`<!DOCTYPE html>
    <html>
       <head>
          <title>HTML Meta Tag</title>
          <meta http-equiv = "refresh" content = "1; url = http://localhost:4200/goto" />
       </head>
       <body>
          <p>Redirigiendo a MuyApp</p>
       </body>
    </html>`

    let id = req.params.id
    console.log(id)
    const user={
        confirmacion:true
    };
    //user.confirmacion = true
    modelos.Personas.update(user,{
        where:{
                id:id
            }
    }).then(respuesta => {
        res.send(html)
    }).catch(err => {
        res.status(500).json({
            transaccion: false,
            data: err,
            msg: 'Servidor no disponible'
        })
    })
}

let crearPersona = (req, res) => {

    let data = req.body.data

    data.estado = true
    data.createdAt = new Date(Date.now())
    data.updatedAt = new Date(Date.now())
    data.confirmacion = false
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
    console.log(req.body.data)
    modelos.Personas.findAll({
        where: {
            correoElectronico: correoElectronico,
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

    console.log("Entre a crear el rol")
    console.log(req.body.data)
    let data=req.body.data;

    data.idPersona = data.id
    data.idRol = 1
    data.estado = true
    data.createdAt = new Date(Date.now())
    data.updatedAt = new Date(Date.now())

    //Crear a la persona-rol
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
    buscarPersona,
    actualizarConfirmacion
}