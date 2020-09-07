;
let env = require('dotenv').config()

const EXPRESS = require('express'),
    BODYPARSER = require('body-parser'),
    HELMET = require('helmet')

let app = EXPRESS(),
    passport = require('passport'),
    session = require('express-session'),
    parseurl = require('parseurl'),
    rutas = require('../rutas/index.js'),
    modelos = require('../models'),
    cors = require('cors'),
    nodemailer = require("nodemailer");
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    morgan = require('morgan'),
    sess = {
        secret: process.env.KEY_SESSION,
        resave: false,
        saveUninitialized: true,
        name: 'sessionID',
        cookie: {
            httpOnly: false,
            // expires: new Date(Date.now() + process.env.TIEMPO),
            maxAge: parseInt(process.env.TIEMPO)
        }
    },
    corsOptions = {
        origin: 'http://localhost:4200',
        optionsSuccessStatus: 200
    }

if (process.env.NODE_ENV === 'production') {
    app.set('trust proxy', 1)
    sess.cookie.secure = true
}

app.use(HELMET())

app.use(BODYPARSER.urlencoded({
    extended: true
}))
app.use(BODYPARSER.json())
app.use(cors(corsOptions))
app.use(morgan('combined'))

app.use(session({secret:'somevalue'}))
app.use(passport.initialize())
app.use(passport.session());


modelos.sequelize.sync().then(() => {
    console.log('DB en línea...')
}).catch(err => {
    console.log(err)
})

app.use('/server', rutas)

module.exports = app