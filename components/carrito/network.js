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

router.delete("/:id", (req, res) => {
  controller
    .deleteCarrito(req.params.id)
    .then(() => {
      response.success(req, res, "Eliminación existosa");
    })
    .catch((e) => {
      response.error(req, res, 500, "Error interno");
    });
});

module.exports = router;
