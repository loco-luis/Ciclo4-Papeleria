import Usuario from "../../routes/auth/usuarioRoutes.js";

const agregar = async (req,res) => {
    console.log(`enviando respuesta desde metodo agregar`);
}
const listar = async (req,res) => {
    console.log(`enviando respuesta desde metodo listar`);
}
const eliminar = async (req,res) => {
    console.log(`enviando respuesta desde metodo eliminar`);
}
const editar = async (req,res) => {
    console.log(`enviando respuesta desde metodo editar`);
}
const listarUno = async (req,res) => {
    console.log(`enviando respuesta desde metodo lisatr uno`);
}
export {
    agregar,
    listar,
    editar,
    eliminar,
    listarUno
}
