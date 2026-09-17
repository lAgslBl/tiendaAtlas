import Productos from "../models/Productos";

export const renderProductos = async (req, res) => {
  const productos = await Productos.find().lean();
  res.render("partials/productos/index", { productos: productos });
};

export const createProductos = async (req, res) => {
  try {
    const productos = Productos(req.body);
    const productoAlmacenado = await productos.save();
    res.redirect("/productos");
  } catch (error) {
    console.log(error.message);
  }
};

export const renderEditProductos = async (req, res) => {
  try {
    const productos = await Productos.findById(req.params.id).lean();
    res.render("partials/productos/editar", { productos });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateProductos = async (req, res) => {
  const { id } = req.params;
  await Productos.findByIdAndUpdate(id, req.body);

  res.redirect("/productos");
};

export const deleteProductos = async (req, res) => {
  const { id } = req.params;
  await Productos.findByIdAndDelete(id);

  res.redirect("/productos");
};

export const statusProductos = async (req, res) => {
  const { id } = req.params;
  const productos = await Productos.findById(id, req.body);
  //Mando a traer mi propiedad opcion que esta en el modelo
  productos.opcion = !productos.opcion;
  await productos.save();
  res.redirect("/productos");
};
