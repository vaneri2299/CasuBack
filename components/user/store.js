const Model = require("./model");

const addUsuario = async (user) => {
  const existingUser = await Model.findOne({ email: user.email });
  if (existingUser) {
    console.log("El email ya está registrado");
    return Promise.reject("El email ya está registrado");
  } else {
    const myUser = new Model(user);
    return myUser.save();
  }
};

const emailExists = async (email) => {
  const exists = await Model.exists({ email: email });
  return exists !== null ? true : false;
};

module.exports = {
  add: addUsuario,
  emailExists: emailExists,
};
