const store = require("./store");
const moment = require("moment");

const addCategoria = (nombre) => {
  if (!nombre) {
    console.log("No hay nombre para la categoria");
    return Promise.reject("Datos incorrectos");
  }

  const categoria = {
    nombre: nombre,
  };
  return store.add(categoria);
};

const getCategorias = () => {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
};

module.exports = {
  addCategoria,
  getCategorias
};
