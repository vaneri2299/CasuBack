const Model = require("./model");

// const addCategoria = (categoria) => {
//   const myCategoria = new Model(categoria);
//   return myCategoria.save();
// };

const getCategorias = () => {
  return Model.find();
};



module.exports = {
  // add: addCategoria,
  list: getCategorias
};
