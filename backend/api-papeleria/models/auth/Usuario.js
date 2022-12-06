import mongoose from "mongoose";
import bcrypt from "bcrypt";

const usuarioSchema = mongoose.Schema({
    idRol: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Rol",
        require: true,
        trim: true
    },
    nombresUsuario: {
        type: String,
        require: true,
        trim: true
    },
    apellidosUsuario: {
        type: String,
        require: true,
        trim: true
    },
    celularUsuario: {
        type: Number,
        require: true,
        trim: true
    },
    correoUsuario: {
        type: String,
        require: true,
        trim: true
    },
    direccionUsuario: {
        type: String,
        require: true,
        trim: true
    },
    usuarioAcceso: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    claveAcceso: {
        type: String,
        require: true,
        trim: true
    },
    estadoUsuario: {
        type: Number,
        require: true,
        trim: true
    },
}, {
    timestamps: true
});
usuarioSchema.pre('save', async function (next){
    if (!this.isModified("claveAcceso")){
        next();
    }
    const salt = await bcrypt.genSalt(12);
    this.claveAcceso = await bcrypt.hash(this.claveAcceso, salt);
});
usuarioSchema.methods.comprobarClave = async function(claveFormulario) {
    return await bcrypt.compare(claveFormulario, this.claveAcceso);
}


const Usuario = mongoose.model("Usuario", usuarioSchema);
export default Usuario;