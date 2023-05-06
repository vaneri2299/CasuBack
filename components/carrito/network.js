const express = require("express");
const router = express.Router();
const response = require("../../network/response");
const controller = require("./controller");

router.post("/", (req, res) => {
  controller
    .addCarrito(req.body)
    .then(() => {
      response.success(req, res, "Carrito creado existomente");
    })
    .catch((e) => {
      response.error(req, res, 400, "Información invalida");
    });
});

module.exports = router;
