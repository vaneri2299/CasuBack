const express = require("express");
const router = express.Router();
const response = require("../../network/response");
const controller = require("./controller");

router.get("/:id", (req, res) => {
  controller
    .getProductos(req.params.id)
    .then((productoList) => {
      const resultado = productoList.map((producto) => {
        return { id: producto.producto, cantidad: producto.cantidad };
      });
      response.success(
        req,
        res,
        resultado,
        "Productos obtenido correctamente"
      );
    })
    .catch((e) => {
      response.error(req, res, 500, "Error inesperado");
    });
});

router.post("/", (req, res) => {
  controller
    .addProducto(req.body)
    .then(() => {
      response.success(req, res, "Exitoso");
    })
    .catch((e) => {
      console.log(e);
      response.error(req, res, 400, "Información invalida");
    });
});

router.patch("/:id", (req, res) => {
  controller
    .updateProducto(req.params.id,req.body)
    .then(() => {
      response.success(req, res, "Actualización del producto existosa");
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
