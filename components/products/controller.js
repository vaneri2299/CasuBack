const store = require("./store");
const moment = require("moment");
const fs = require("fs");
const path = require("path");

const addProducto = (producto, imagenProducto) => {
  return new Promise((resolve, reject) => {
    if (!producto || !imagenProducto) {
      console.log("No hay producto");
      reject("Datos incorrectos");
      return;
    }
    resolve(store.add(producto));
  });
};

const getProductos = () => {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
};

const getProducto = (id) => {
  return new Promise((resolve, reject) => {
    resolve(store.get(id));
  });
};

// Función para obtener la imagen
const getImagen = () => {
  return new Promise((resolve, reject) => {
    // Ruta de la imagen en el servidor
    const imagePath = path.join(__dirname, "../../assets/shop1.png");

    // Lee la imagen de manera asíncrona
    fs.readFile(imagePath, function (err, data) {
      if (err) {
        // Si hay un error, rechaza la promesa con el error
        reject(err);
      } else {
        // Si se lee la imagen correctamente, resuelve la promesa
        resolve("Imagen obtenida");
      }
    });
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
  getProducto,
  updateProducto,
  deleteProducto,
  getImagen,
};
