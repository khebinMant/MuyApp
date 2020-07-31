;
const EXPRESS = require('express')
const MULTIPARTY = require('connect-multiparty')
const filePdf = require('connect-multiparty')
const huerto = require('../controles/huerto')

let api = EXPRESS.Router(),
    usuarioControl = require('../controles/usuario')
    huertoControl = require('../controles/huerto')
    siembraControl = require('../controles/siembra')
//End Points


//End Point para usuarios
api.post('/crear-usuarios', usuarioControl.crearUsuario)
api.get('/buscar-usuarios', usuarioControl.loginUsuario)
api.get('/traer-usuarios',usuarioControl.traerUsuarios)

//End Point para huertos
api.post('/crear-huerto',huertoControl.crearHuertos)


//End Point para siembras
api.post('/sembrar-producto',siembraControl.añadirSiembra) 
api.get('/obtener-siembras',siembraControl.traerSiembras) 
module.exports = api