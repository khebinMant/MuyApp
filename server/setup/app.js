;
let env = require('dotenv').config()

const EXPRESS =  require('express'),
      BODYPARSER = require('body-parser');

let app = EXPRESS(),
    rutas = require('../rutas/index.js'),
    modelos = require('../models'),
    cors = require('cors'),
    nodemailer = require("nodemailer");
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    corsOptions = {
        origin: 'http://localhost:4200',
        optionsSuccessStatus: 200
    }
    
app.use(BODYPARSER.urlencoded({extended: true}))
app.use(BODYPARSER.json())
app.use(cors(corsOptions))


modelos.sequelize.sync().then(() => {
    console.log('DB en línea...')
}).catch(err => {
    console.log(err) 
})

app.use('/server', rutas)

module.exports = app