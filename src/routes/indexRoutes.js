import { Router } from "express";
import Productos from "../models/Productos";
import Clientes from "../models/Clientes";
import {
  createProductos,
  deleteProductos,
  renderEditProductos,
  renderProductos,
  statusProductos,
  updateProductos,
} from "../controllers/productoController";
import {
  createClientes,
  deleteClientes,
  renderEditClientes,
  renderClientes,
  statusClientes,
  updateClientes,
} from "../controllers/clienteController";

const router = Router();

/* ---------------- Home ---------------- */
router.get("/", (req, res) => res.render("home"));

/* ---------------- Productos ---------------- */
router.get("/productos", renderProductos);
router.post("/productos/agregar", createProductos);
router.get("/productos/:id/update", renderEditProductos);
router.post("/productos/:id/update", updateProductos);
router.get("/productos/:id/delete", deleteProductos);
router.get("/productos/:id/status", statusProductos);

/* ---------------- Clientes ---------------- */
router.get("/clientes", renderClientes);

router.post("/clientes/agregar", createClientes);
router.get("/clientes/:id/update", renderEditClientes);
router.post("/clientes/:id/update", updateClientes);
router.get("/clientes/:id/delete", deleteClientes);
router.get("/clientes/:id/status", statusClientes);

export default router;