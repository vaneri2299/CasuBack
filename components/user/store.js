const Model = require("./model");

const addProducto = (user) => {
  const myUser = new Model(user);
  return myUser.save();
};

module.exports = {
  add: addProducto,
};
