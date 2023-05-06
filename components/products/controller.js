const store = require("./store");
const moment = require("moment");

const addProducto = (producto, imagenProducto) => {
  return new Promise((resolve, reject) => {
    if (!producto || !imagenProducto) {
      console.log("No hay producto");
      reject("Datos incorrectos");
      return;
    }
    producto.imagen = "http://localhost:3000/app/files/" + imagenProducto.filename;
    resolve(store.add(producto));
  });
};

const getProductos = () => {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
};

const updateProducto = (id, productoNombre) => {
  console.log(productoNombre);
  return new Promise(async (resolve, reject) => {
    if (!id || !productoNombre) {
      console.log("No hay id o producto");
      reject("Datos incorrectos");
      return;
    }
    const result = store.update(id, productoNombre);
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
