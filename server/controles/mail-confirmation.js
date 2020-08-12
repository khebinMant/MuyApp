;
const Sequelize = require('sequelize')
const env = process.env.NODE_ENV || 'development';
const nodemailer = require("nodemailer");

const config = require(__dirname + '/../config/config.js')[env]
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
let modelos = require('../models')
let Op = Sequelize.Op;

const details = require("./details.json");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

let enviarMail = (req, res)=>{

    console.log("request came");
    let user = req.body.data;
    sendMail(user, info => {
      console.log(`The mail has beed send 😃 and the id is ${info.messageId}`);
      res.send(info);
    });
    /*
    user.confirmacion = true
    modelos.Siembras.update(user,{
        where:{
            correoElectronico:user.correoElectronico,
            psw:user.psw
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
    })*/
}
async function sendMail(user, callback) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: details.email,
      pass: details.password
    }
  });

  let mailOptions = {
    from: '"MuyApp"<example.gimail.com>', // sender address
    to: user.correoElectronico, // list of receivers
    subject: "Bienvenido a MuyApp tu huerto Virtual 🌱", // Subject line
    html: `<h1>Hola ${user.nombre} y bienvenido a MuyApp</h1><br>
    <h2>Tu correo electrónico es: ${user.correoElectronico}</h2>
    <h2>Tu contraseña es: ${user.psw}</h2>
    <li><a href="http://localhost:4200/login">Ir a MuyApp Continuar</a></li>   
    <h4>Gracias por unirte a MuyApp</h4>`
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);
  callback(info);
}

// main().catch(console.error);
module.exports = {
    enviarMail
}