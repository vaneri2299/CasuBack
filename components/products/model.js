const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  categoria: {
    type: Schema.ObjectId,
    ref: "Categorias",
    required: true,
  },
  cantidad: {
    type: Number,
    required: true,
  },
  imagen: String,
});

const model = mongoose.model("Productos", mySchema, "Productos");
module.exports = model;
