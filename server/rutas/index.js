;
const EXPRESS = require('express')
const MULTIPARTY = require('connect-multiparty')
const filePdf = require('connect-multiparty')
const huerto = require('../controles/huerto')
const productos = require('../models/productos')


let api = EXPRESS.Router(),

    //Controles de archivos
    imagenPersonaMiddleware = MULTIPARTY({uploadDir: './files/imagenes/personas'})
    imagenProductosMiddleware = MULTIPARTY({uploadDir: './files/imagenes/productos'})

    //Controles de datos
    personaControl = require('../controles/persona')
    huertoControl = require('../controles/huerto')
    siembraControl = require('../controles/siembra')
    productoControl = require('../controles/producto')
    filesControl = require('../controles/files')
    mailControl = require('../controles/mail-confirmation')

//End Points


//End Point para personas y usuarios
api.post('/crear-personas', personaControl.crearPersona)
api.post('/buscar-personas', personaControl.buscarPersona)
api.post('/crear-persona-rol',personaControl.crearRolPersona)
api.post('/login',personaControl.login)
api.get('/actualizar-confirmacion/:id',personaControl.actualizarConfirmacion)//params de id 
//todas las personas
api.post('/poner-foto',personaControl.ponerFoto)

api.get('/traer-personas',personaControl.traerPersonas)


//End Point para huertos
api.post('/crear-huerto',huertoControl.crearHuertos)
api.post('/traer-huerto',huertoControl.traerHuertos)

//End Point para siembras
//post agregar
//delete borrra
//update actulizacion

api.post('/sembrar-producto',siembraControl.añadirSiembra) 
api.post('/obtener-siembras',siembraControl.traerSiembras) 
api.post('/eliminar-siembras',siembraControl.eliminarSiembra) 

//End Point para productos
api.post('/traer-productos',productoControl.traerProductos)


//End Point para  cargar archivos
api.post('/imagen-persona', [imagenPersonaMiddleware],filesControl.upload)
api.post('/imagen-producto',[imagenProductosMiddleware],filesControl.upload)
//End Point para ver ver achivos cargado
api.get('/ver-archivo/:urlFile/:directorio', filesControl.verArchivo)

//End point para enviar mail de confirmacion 
api.post('/enviar-correo', mailControl.enviarMail)
module.exports = api
