;
const EXPRESS = require('express')
const MULTIPARTY = require('connect-multiparty')
const filePdf = require('connect-multiparty')
const huerto = require('../controles/huerto')
const productos = require('../models/productos')

let api = EXPRESS.Router(),
    personaControl = require('../controles/persona')
    huertoControl = require('../controles/huerto')
    siembraControl = require('../controles/siembra')
    productoControl = require('../controles/producto')
//End Points


//End Point para personas y usuarios
api.post('/crear-personas', personaControl.crearPersona)
api.get('/buscar-personas', personaControl.buscarPersona)
api.post('/crear-persona-rol',personaControl.crearRolPersona)
api.post('/login',personaControl.login)
//todas las personas
api.get('/traer-personas',personaControl.traerPersonas)


//End Point para huertos
api.post('/crear-huerto',huertoControl.crearHuertos)


//End Point para siembras
api.post('/sembrar-producto',siembraControl.añadirSiembra) 
api.get('/obtener-siembras',siembraControl.traerSiembras) 
api.post('/eliminar-siembras',siembraControl.eliminarSiembra) 

//End Point para productos
api.get('/traer-productos',productoControl.traerProductos)

module.exports = api
