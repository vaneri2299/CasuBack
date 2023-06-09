const Model = require("./model");

const addProducto = (producto) => {
  const myProducto = new Model(producto);
  myProducto.save();
};

const getProductos = async () => {
  const productos = await Model.find().populate('categoria', '-_id nombre');
  return productos.map(producto => ({
    ...producto.toJSON(),
    categoria: producto.categoria.nombre
  }));
};

const getProducto = async (id) => {
  const producto = await Model.findOne({ _id: id })
    .populate("categoria", "nombre"); // Incluir la información de la categoría

  return producto;
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
  get: getProducto,
  list: getProductos,
  update: updateProducto,
  remove: removeProducto,
};
