const express = require("express");
const multer = require("multer");
const router = express.Router();
const response = require("../../network/response");
const controller = require("./controller");
const path = require("path");

const upload = multer({ dest: "public/files/" });

router.get("/:id", (req, res) => {
  controller
    .getProducto(req.params.id)
    .then((producto) => {
      response.success(
        req,
        res,
        producto,
        "Producto obtenido correctamente"
      );
    })
    .catch((e) => {
      console.log(e)
      response.error(req, res, 500, "Error inesperado");
    });
});

router.get("/", (req, res) => {
  controller
    .getProductos()
    .then((productoList) => {
      response.success(
        req,
        res,
        productoList,
        "Productos obtenidos correctamente"
      );
    })
    .catch((e) => {
      response.error(req, res, 500, "Error inesperado");
    });
});

const mime = require('mime-types');
const fs = require('fs');

router.post("/imagen", function (req, res) {
  controller
    .getImagen()
    .then(() => {
      const imagePath = path.join(__dirname, `../../assets/${req.body.url}`);
      const contentType = mime.contentType(req.body.url);
      if (contentType) {
        res.set('Content-Type', contentType);
      }
      const imageBuffer = fs.readFileSync(imagePath);
      res.send(imageBuffer);
    })
    .catch((error) => {
      console.log(error);
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
