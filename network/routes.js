const express = require("express");
const producto = require("../components/products/network");
const user = require("../components/user/network");
const categoria = require("../components/categoria/network");

const routes = (server) => {
  server.use("/producto", producto);
  server.use("/user", user);
  server.use("/categoria", categoria);
};

module.exports = routes