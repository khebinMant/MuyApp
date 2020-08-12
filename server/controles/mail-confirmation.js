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

    console.log("Se entro al envio del correo");
    let user = req.body.data;
    sendMail(user, info => {
      console.log(`El email ha sido enviado con exito😃  ${info.messageId}`);
      return res.status(200).json({
        transaccion: true,
        data: info,
        msg: info.length
    })
    });

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
    <h2 style="text-aling:center;">Tu correo electrónico es: ${user.correoElectronico}</h2>
    <h2>Tu contraseña es: ${user.psw}</h2>
    <h1>Click en el siguiente enlace para activar la cuenta</h1>
    <h1><li><a href="http://localhost:3000/server/actualizar-confirmacion/${user.id}">Click Aqui para activar su cuenta</a></li></h1>
    <h1>Gracias por unirte a MuyApp</h1>`
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);
  callback(info);
}

// main().catch(console.error);
module.exports = {
    enviarMail
}