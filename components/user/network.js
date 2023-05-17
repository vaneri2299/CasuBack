const express = require("express");
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const router = express.Router();
const response = require("../../network/response");
const controller = require("./controller");

router.post("/", (req, res) => {
  controller
    .addUser(req.body.email)
    .then(() => {
      response.success(req, res, "Usuario creado existomente");
    })
    .catch((e) => {
      response.error(req, res, 400, "Información invalida");
    });
});

router.post("/send-code", (req, res) => {
  controller
    .sendCode(req.body.email)
    .then(() => {
      response.success(req, res, "Correo enviado existosamente");
    })
    .catch((error) => {
      console.error("Error al enviar el correo electrónico", error);
      response.error(req, res, 500, "Error al enviar el correo electrónico");
    });
});

router.post('/api/verify-code', (req, res) => {
  const email = req.body.email;
  const codigoIngresado = req.body.codigo;
  controller
    .verifyCode(email, codigoIngresado)
    .then(() => {
      response.success(req, res, "Código válido");
    })
    .catch((error) => {
      console.error("Código inválido", error);
      response.error(req, res, 500, "Código inválido");
    });
});

module.exports = router;
