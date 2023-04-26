const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  nombre: String,
  fechaCreado: String,
});

const model = mongoose.model("Productos", mySchema, "Productos");
module.exports = model;
