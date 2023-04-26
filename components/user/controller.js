const store = require("./store");
const moment = require("moment");

const addUser = (nombre) => {
  if (!nombre) {
    console.log("No hay nombre");
    return Promise.reject("Datos incorrectos");
  }

  const user = {
    nombre: nombre,
  };
  return store.add(user);
};

module.exports = {
  addUser,
};
