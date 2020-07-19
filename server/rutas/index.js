
;
const EXPRESS = require('express')
const MULTIPARTY = require('connect-multiparty')
const filePdf = require('connect-multiparty')

let api = EXPRESS.Router(),
    pruebaControl = require('../controles/prueba')



//End Point
api.get('/hola-mundo', pruebaControl.mensajeHolamundo)

module.exports = api