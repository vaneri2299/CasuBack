const express = require("express");
const multer = require("multer");
const router = express.Router();
const response = require("../../network/response");
const controller = require("./controller");

const upload = multer({ dest: "public/files/" });

router.get("/", (req, res) => {
  controller
    .getProductos()
    .then((productoList) => {
      response.success(
        req,
        res,
        productoList,
        "Productos obtenido correctamente"
      );
    })
    .catch((e) => {
      response.error(req, res, 500, "Error inesperado");
    });
});

router.post("/", upload.single("imagen"), (req, res) => {
  controller
    .addProducto(req.body, req.file)
    .then(() => {
      response.success(req, res, "Exitoso");
    })
    .catch((e) => {
      response.error(req, res, 400, "Información invalida");
    });
});

router.patch("/:id", (req, res) => {
  controller
    .updateProducto(req.params.id, req.body.nombre)
    .then(() => {
      response.success(req, res, "Actualización existosa");
    })
    .catch((e) => {
      response.error(req, res, 500, "Error interno");
    });
});

router.delete("/:id", (req, res) => {
  controller
    .deleteProducto(req.params.id)
    .then(() => {
      response.success(req, res, "Eliminación existosa");
    })
    .catch((e) => {
      response.error(req, res, 500, "Error interno");
    });
});

module.exports = router;
