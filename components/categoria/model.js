const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
  nombre: {
    type: String,
    required: true,
  }
});

const model = mongoose.model("Categorias", mySchema, "Categorias");
module.exports = model;
