const express = require("express");
const producto = require("../components/products/network");
const user = require("../components/user/network");
const categoria = require("../components/categoria/network");
const carrito = require("../components/carrito/network");
const carrito_producto = require("../components/carrito_producto/network");

const routes = (server) => {
  server.use("/producto", producto);
  server.use("/user", user);
  server.use("/categoria", categoria);
  server.use("/carrito", carrito);
  server.use("/carrito_producto", carrito_producto);
};

module.exports = routes