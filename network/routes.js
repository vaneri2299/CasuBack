const express = require("express");
const producto = require("../components/products/network");

const routes = (server) => {
  server.use("/producto", producto);
};

module.exports = routes