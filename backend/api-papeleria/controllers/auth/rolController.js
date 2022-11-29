import Rol from "../../models/auth/Rol.js";

const agregar = async (req,res) => {
    const{nombreRol} = req.body;
    const existeRol = await Rol.findOne({nombreRol});

    if (existeRol){
        const error = new Error("Rol ya existe en base de datos.");
        return res.status(400).json({msg: error.message, ok: "NO"});
    }

    try {
        const rol = new Rol(req.body);
        const rolGuardado = await rol.save();
        res.json({body: rolGuardado, ok : "SI", msg: "Rol creado correctamente."});

    } catch (error) {
        console.log(error);        
    }

}
const listar = async (req,res) => {
    const roles = await Rol.find();
    res.json(roles);
}
const eliminar = async (req,res) => {
    const {id} = req.params;
    const rol = await Rol.findById(id);

    if (!rol){
        const error = new Error ("Rol no encontrado  en base de datos.");
        return res.status(404).json({msg: error.message, ok: "NO"});
    }
    try {
        await rol.deleteOne();
        res.json({msg: "Rol eliminado correctamente.", ok: "SI"});
    } catch (error) {
        console.log(error);
    }
}
const editar = async (req,res) => {
    const {id} = req.params;
    const rol = await Rol.findById(id);

    if (!rol){
        const error = new Error ("Rol no encontrado  en base de datos.");
        return res.status(404).json({msg: error.message, ok: "NO"});
    }

    rol.nombreRol= req.body.nombreRol || rol.nombreRol;
    rol.estadoRol= req.body.estadoRol || rol.estadoRol;

    try {
        const rolGuardado = await rol.save();
        res.json({body: rolGuardado, msg: "Rol actualizado correctamente.", ok: "SI"});

    } catch (error) {
        console.log(error);
        
    }
}
const listarUno = async (req,res) => {
    const {id} = req.params;
    const rol = await Rol.findById(id);

    if (!rol){
        const error = new Error ("Rol no encontrado  en base de datos.");
        return res.status(404).json({msg: error.message, ok: "NO"});
    }
    res.json(rol);
}
export {
    agregar,
    listar,
    editar,
    eliminar,
    listarUno
}
