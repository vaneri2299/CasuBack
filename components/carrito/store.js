const Model = require("./model");

const addCarrito = (carrito) => {
  const myCarrito = new Model(carrito);
  return myCarrito.save();
};

module.exports = {
  add: addCarrito,
};
