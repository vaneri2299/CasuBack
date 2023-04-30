const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
  _idUsuario: {
    type: Schema.ObjectId,
    ref: "Usuarios",
    required: true,
  },
});

const model = mongoose.model("Carritos", mySchema, "Carritos");
module.exports = model;
