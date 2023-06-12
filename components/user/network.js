const express = require("express");
const router = express.Router();
const response = require("../../network/response");
const controller = require("./controller");

router.post("/", (req, res) => {
  controller
    .addUser(req.body.email, req.body.password)
    .then(() => {
      response.success(req, res, "", "Usuario creado existomente");
    })
    .catch((e) => {
      console.log("Aqui");
      console.log(e);
      let mensaje =
        e === "El email ya está registrado"
          ? "El email ya esta registrado"
          : "Información invalida";
      response.error(req, res, 400, mensaje);
    });
});

router.post("/send-code", (req, res) => {
  controller
    .sendCode(req.body.email)
    .then(() => {
      response.success(req, res, "", "Correo enviado existosamente");
    })
    .catch((error) => {
      console.error("Error al enviar el correo electrónico", error);
      response.error(req, res, 500, "Error al enviar el correo electrónico");
    });
});

router.post("/verify-code", (req, res) => {
  const email = req.body.email;
  const codigoIngresado = req.body.codigo;
  controller
    .verifyCode(email, codigoIngresado)
    .then(() => {
      response.success(req, res, "", "Código válido");
    })
    .catch((error) => {
      console.error("Código inválido", error);
      response.error(req, res, 500, "Código inválido");
    });
});

router.post("/exist", (req, res) => {
  controller
    .userExist(req.body.email)
    .then(() => {
      response.success(req, res, "", "Código enviado");
    })
    .catch((error) => {
      console.error(error);
      response.error(req, res, 500, "El usuario ya existe. Inicia sesión");
    });
});

router.post("/hash", (req, res) => {
  controller
    .userHash(req.body.email, req.body.password)
    .then((data) => {
      response.success(req, res, data, "Bienvenido");
    })
    .catch((error) => {
      console.error(error);
      response.error(req, res, 500, "Informacion inválida");
    });
});

module.exports = router;
