const express = require("express");
const producto = require("../components/products/network");
const user = require("../components/user/network");

const routes = (server) => {
  server.use("/producto", producto);
  server.use("/user", user);
};

module.exports = routes