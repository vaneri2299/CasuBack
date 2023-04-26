const Model = require("./model");

const addProducto = (producto) => {
  const myProducto = new Model(producto);
  console.log("aqui", producto);
  console.log(myProducto);
  myProducto.save();
};

const getProductos = async () => {
  const productos = await Model.find();
  return productos;
};

const updateProducto = async (id, productoNombre) => {
  const myProducto = await Model.findOne({ _id: id });
  myProducto.nombre = productoNombre;
  const newProducto = await myProducto.save();
  return newProducto;
};

const removeProducto = (id) => {
  return Model.deleteOne({ _id: id });
};

module.exports = {
  add: addProducto,
  list: getProductos,
  update: updateProducto,
  remove: removeProducto,
};
