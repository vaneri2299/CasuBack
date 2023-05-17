const store = require("./store");


const addProducto = (producto) => {
  return new Promise((resolve, reject) => {
    if (!producto) {
      console.log("No hay producto");
      reject("Datos incorrectos");
      return;
    }
    resolve(store.add(producto));
  });
};

const getProductos = (idCarrito) => {
  return new Promise((resolve, reject) => {
    resolve(store.list(idCarrito));
  });
};

const updateProducto = (id, producto) => {
  return new Promise(async (resolve, reject) => {
    if (!id || !producto) {
      console.log("No hay id o producto");
      reject("Datos incorrectos");
      return;
    }
    const result = store.update(id, producto);
    resolve(result);
  });
};

const deleteProducto = (id) => {
  return new Promise(async (resolve, reject) => {
    if (!id) {
      console.log("No hay id");
      reject("Datos incorrectos");
      return;
    }
    const result = store.remove(id);
    resolve(result);
  });
};

module.exports = {
  addProducto,
  getProductos,
  updateProducto,
  deleteProducto,
};
