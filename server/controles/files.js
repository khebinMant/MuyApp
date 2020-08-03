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
let Op = Sequelize.Op
let fs = require('fs')
let path = require('path')

let upload = (req, res, err) => {
  let file = req.files.upload[0]
  if (file.originalFilename == '') {
    fs.unlinkSync(file.path)
    return res.status(400).json({
      transaccion: false,
      data: [],
      msg: 'No existe el archivo de origen'
    })
  } else {
    let url = file.path
    url = url.split('/')
    let urlFile = [url[url.length - 1]]
    return res.status(200).json({
      transaccion: true,
      data: urlFile,
      msg: urlFile.length
    })
  }
}


let verArchivo = (req, res) => {
  let urlFile = req.params.urlFile
  let directorio = req.params.directorio
  let pathFile = validaPath(urlFile, directorio)
  
  fs.exists(pathFile, (exists) => {
    if (exists) {
      return res.status(200).sendFile(path.resolve(pathFile))
    } else {
      return res.status(200).send('No existe el archivo')
    }
  })
}

let eliminarArchivo = (req, res) => {
  let urlFile = req.body.data.urlFile
  let directorio = req.body.data.directorio
  let pathFile = validaPath(urlFile, directorio)
  fs.exists(pathFile, (exists) => {
    if (exists) {
      fs.unlinkSync(pathFile)
      return res.status(200).send('Archivo eliminado')
    } else {
      return res.status(200).send('No existe el archivo')
    }
  })
}

let modificarArchivo = (req, res) => {
  let urlFile = req.body.data.urlFile
  let directorio = req.body.data.directorio
  let pathFile = validaPath(urlFile, directorio)
  if (file.originalFilename == '') {
    fs.unlinkSync(file.path)
    return res.status(400).json({
      transaccion: false,
      data: [],
      msg: 'No existe el archivo de origen'
    })
  } else {
    fs.exists(pathFile, (exists) => {
      if (exists) {
        fs.unlinkSync(pathFile)
        let url = file.path
        url = url.split('/')
        let urlFile = [url[url.length - 1]]
        return res.status(200).json({
          transaccion: true,
          data: urlFile,
          msg: urlFile.length
        })
      } else {
        return res.status(400).json({
          transaccion: false,
          data: [],
          msg: 'No existe el archivo de origen'
        })
      }
    })
  }
}



// agregar validaciones si hay más carpetas, no colocar en module.export
let validaPath = (urlFile, directorio) => {
  let pathFile = ''
  if(directorio == 'imagen-persona'){
    pathFile = `./files/imagenes/personas/${urlFile}`
  }
  if(directorio == 'imagen-producto'){
    pathFile = `./files/imagenes/productos/${urlFile}`
  }
  return pathFile
}

module.exports = {
  upload,
  verArchivo,
  eliminarArchivo,
  modificarArchivo
}