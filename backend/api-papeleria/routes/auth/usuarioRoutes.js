import express from "express";
const router = express.Router();
import { agregar, listar, eliminar, editar, listarUno, autenticar } from "../../controllers/auth/usuarioController.js";
import validarAutenticacion from "../../middleware/validarAutenticacion.js";

router.get("/", validarAutenticacion, listar);
router.get("/:id", validarAutenticacion, listarUno);
router.post("/", validarAutenticacion, agregar);
router.put("/:id", validarAutenticacion, editar);
router.delete("/:id", validarAutenticacion, eliminar);


//rutas publicas

router.post("/login", autenticar);

export default router;
