const Model = require("./model");

const addProducto = async (producto) => {
  const myProducto = new Model(producto);

  Model.findOne({ carrito: myProducto.carrito })
    .then((carrito) => {
      if (!carrito) {
        // Si el carrito no existe, lo creamos
        const nuevoCarrito = new Model({ carrito: myProducto.carrito });
        nuevoCarrito
          .save()
          .then(() => {
            console.log("Carrito creado correctamente");
            // Después de crear el carrito, agregamos el producto
            agregarProductoEnCarrito(myProducto);
          })
          .catch((error) => {
            console.log("Error al crear el carrito:", error.message);
          });
      } else {
        // Si el carrito existe, agregamos el producto
        agregarProductoEnCarrito(myProducto);
      }
    })
    .catch((error) => {
      console.log("Error al agregar el producto:", error.message);
    });
};
const agregarProductoEnCarrito = (myProducto) => {
  console.log("aqui", myProducto.productos[0].producto);
  Model.findOne({
    "productos.producto": myProducto.productos[0].producto,
  })
    .then((productoExistente) => {
      if (productoExistente) {
        console.log("El producto ya existe en el carrito");
      } else {
        Model.findOneAndUpdate(
          { carrito: myProducto.carrito },
          {
            $push: {
              productos: {
                producto: myProducto.productos[0].producto,
                cantidad: myProducto.productos[0].cantidad,
              },
            },
          },
          { new: true, upsert: true, useFindAndModify: false }
        )
          .then((carritoActualizado) => {
            console.log("Producto agregado correctamente:", carritoActualizado);
          })
          .catch((error) => {
            console.log("Error al agregar el producto:", error.message);
          });
      }
    })
    .catch((error) => {
      console.log("Error al agregar el producto:", error.message);
    });
};

const getProductos = async (idCarrito) => {
  const carrito = await Model.findOne({ carrito: idCarrito });
  const productos = carrito.productos;
  return productos;
};

const updateProducto = async (idCarrito, producto) => {
  const result = await Model.findOneAndUpdate(
    {
      carrito: idCarrito,
      "productos.producto": producto.producto,
    },
    { $set: { "productos.$[elem].cantidad": producto.cantidad } },
    {
      arrayFilters: [{ "elem.producto": producto.producto }],
      new: true,
    }
  );

  console.log("Producto actualizado:", result);
  return result;
};

const removeProducto = (id) => {
  return Model.deleteOne({ _id: id });
};

module.exports = {
  add: addProducto,
  list: getProductos,
  update: updateProducto,
  remove: removeProducto,
};
