const store = require("./store");
const moment = require("moment");

const addCarrito = (usuario) => {
  if (!usuario) {
    console.log("No hay usuario");
    return Promise.reject("Datos incorrectos");
  }
  return store.add(usuario);
};

const deleteCarrito = (id) => {
  return new Promise(async (resolve, reject) => {
    if (!id) {
      console.log("No hay id del carrito");
      reject("Datos incorrectos");
      return;
    }
    const result = store.remove(id);
    resolve(result);
  });
};

module.exports = {
  addCarrito,
  deleteCarrito,
};
