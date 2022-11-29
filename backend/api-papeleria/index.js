//const express = require('express');
import express from 'express';
import dotenv from "dotenv";
import conectarDB from './config/db.js';

import rolRoutes from "./routes/auth/rolRoutes.js";
import usuarioRoutes from "./routes/auth/usuarioRoutes.js";
import categoriaRoutes from "./routes/inventario/categoriaRoutes.js";
import impuestoRoutes from "./routes/inventario/impuestoRoutes.js";
import inventarioRoutes from "./routes/inventario/inventarioRoutes.js";
import productoRoutes from "./routes/inventario/productoRoutes.js";
import facturaRoutes from "./routes/ventas/facturaRoutes.js";
import detalleFacturaRoutes from "./routes/ventas/detalleFacturaRoutes.js";

const app = express();
app.use(express.json());

dotenv.config();

const PORT= process.env.PORT || 4000

conectarDB ();

app.use("/api/roles",rolRoutes);
app.use("/api/usuarios",usuarioRoutes);
app.use("/api/categorias",categoriaRoutes);
app.use("/api/impuesto",impuestoRoutes);
app.use("/api/inventario",inventarioRoutes);
app.use("/api/productos",productoRoutes);
app.use("/api/rolesfactura",facturaRoutes);
app.use("/api/detalle_factura   ",detalleFacturaRoutes);


app.listen( PORT, () => {
    console.log(`Servidor conectado puerto ${PORT}`);

});