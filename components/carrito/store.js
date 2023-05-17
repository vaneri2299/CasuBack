const Model = require("./model");

const addCarrito = (carrito) => {
  const myCarrito = new Model(carrito);
  return myCarrito.save();
};

const removeCarrito = (id) => {
  return Model.deleteOne({ _id: id });
};

module.exports = {
  add: addCarrito,
  remove: removeCarrito,
};
