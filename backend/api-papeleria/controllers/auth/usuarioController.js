import Usuario from "../../models/auth/Usuario.js";
import generarJWT from "../../helpers/generarJWT.js";

const agregar = async (req, res) => {
    const { usuarioAcceso } = req.body;
    const existeUsuario = await Usuario.findOne({ usuarioAcceso });

    if (existeUsuario) {
        const error = new Error("Usuario ya existe en base de datos.");
        return res.status(400).json({ msg: error.message, ok: "NO" });
    }
    try {
        const usuario = new Usuario(req.body);
        const usuarioGuardado = await usuario.save();
        res.json({ body: usuarioGuardado, ok: "SI", msg: "Usuario creado  correctamente." });
    } catch (error) {
        console.log(error);
    }

}
const listar = async (req, res) => {
    const usuarios = await Usuario.find().populate('idRol', {
        nombreRol: 1,
        _id: 0
    });
    res.json(usuarios);
}
const eliminar = async (req, res) => {
    const { id } = req.params;
    const usuario = await Usuario.findById(id);

    if (!usuario) {
        const error = new Error("Usuario no encontrado en base de datos.");
        return res.status(404).json({ msg: error.message, ok: "NO" });
    }
    await usuario.deleteOne();
    res.json({ msg: "usuario eliminado correctamente.", ok: "SI" });
}

const editar = async (req, res) => {
    const { id } = req.params;
    const usuario = await Usuario.findById(id);

    if (!usuario) {
        const error = new Error("Usuario no encontrado en base de datos.");
        return res.status(404).json({ msg: error.message, ok: "NO" });
    }
    usuario.idRol = req.body.idRol || usuario.idRol;
    usuario.nombresUsuario = req.body.nombresUsuario || usuario.nombresUsuario;
    usuario.apellidosUsuario = req.body.apellidosUsuario || usuario.apellidossUsuario;
    usuario.celularUsuario = req.body.celularUsuario || usuario.celualrUsuario;
    usuario.correoUsuario = req.body.correoUsuario || usuario.correoUsuario;
    usuario.direccionUsuario = req.body.direccionUsuario || usuario.direccionUsuario;
    usuario.usuarioAcceso = req.body.usuarioAcceso || usuario.usuarioAcceso;
    usuario.claveAcceso = req.body.claveAcceso || usuario.claveAcceso;
    usuario.estadoUsuario = req.body.estadoUsuario || usuario.estadoUsuario;

    try {
        const usuarioGuardado = await usuario.save();
        res.json({ body: usuarioGuardado, msg: "Usuario actualizado correctamente.", ok: "SI" })

    } catch (error) {
        console.log(error);
    }
}
const listarUno = async (req, res) => {
    const { id } = req.params;
    const usuario = await Usuario.findById(id);

    if (!usuario) {
        const error = new Error("Usuario no encontrado en base de datos.");
        return res.status(404).json({ msg: error.message, ok: "NO" });
    }
    res.json(usuario);
}
const autenticar = async (req, res) => {
    const { usuarioAcceso, claveAcceso } = req.body;

    const usuario = await Usuario.findOne({ usuarioAcceso });
    if (!usuario) {
        const error = new Error("Usuario no existe.");
        return res.status(404).json({ msg: error.message, ok: "NO_EXISTE" });
    }
    if (await usuario.comprobarClave(claveAcceso)) {
        res.json({
            _id: usuario._id,
            nombresUsuario: usuario.nombresUsuario,
            usuarioAcceso: usuario.usuarioAcceso,
            tokenJwt: generarJWT(usuario._id)
        })

    } else {
        const error = new Error("La clave es incorrecta");
        res.json({msg: error.message, ok: " CLAVE INCORRECTA"});
    }
}
export {
    agregar,
    listar,
    editar,
    eliminar,
    listarUno,
    autenticar
}
