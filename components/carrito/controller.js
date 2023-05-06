const store = require("./store");
const moment = require("moment");

const addCarrito = (usuario) => {
  if (!usuario) {
    console.log("No hay usuario");
    return Promise.reject("Datos incorrectos");
  }

  const user = {
    nombre: nombre,
  };
  return store.add(user);
};

module.exports = {
  addCarrito,
};
