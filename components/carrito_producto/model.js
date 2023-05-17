const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
  carrito: {
    type: Schema.ObjectId,
    ref: "Carritos",
    required: true,
  },
  productos: [
    {
      producto: {
        type: Schema.ObjectId,
        ref: "Productos",
        required: true,
      },
      cantidad: {
        type: Number,
        required: true,
      },
      _id: false,
    },
  ],
});

const model = mongoose.model(
  "Carritos_Productos",
  mySchema,
  "Carritos_Productos"
);
module.exports = model;
