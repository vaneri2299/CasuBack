const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
  nombre: String,
});

const model = mongoose.model("Usuarios", mySchema, "Usuarios");
module.exports = model;
