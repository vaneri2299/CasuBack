const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
  nombre: String,
  apellido: String,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  telefono: String,
  creado: String,
  fotoPerfil: {
    data: Buffer,
    contentType: String,
  },
  TDC: String,
  Crypto: String,
  isAdmin: String,
});

const model = mongoose.model("Usuarios", mySchema, "Usuarios");
module.exports = model;
