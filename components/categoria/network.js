const express = require("express");
const router = express.Router();
const response = require("../../network/response");
const controller = require("./controller");

// router.post("/", (req, res) => {
//   controller
//     .addCategoria(req.body.nombre)
//     .then(() => {
//       response.success(req, res, "Categoria creada exitomente");
//     })
//     .catch((e) => {
//       response.error(req, res, 400, "Información invalida");
//     });
// });

router.get("/", (req, res) => {
  controller
    .getCategorias()
    .then((categoriasList) => {
      response.success(
        req,
        res,
        categoriasList,
        "Categorias obtenidas correctamente"
      );
    })
    .catch((e) => {
      response.error(req, res, 500, "Error inesperado");
    });
});

module.exports = router;
