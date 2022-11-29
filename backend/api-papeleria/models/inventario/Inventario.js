import mongoose from "mongoose";

const inventarioSchema = mongoose.Schema({
    idProducto:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Producto",
        require: true,
        trim: true
    },
    cantidadInventario:{
        type: Number,
        require: true,
        trim: true
    },
    frchaRegistro:{
        type: Date,
        require: true,
        trim: true
    },
    horaRegistro:{
        type: Date,
        require: true,
        trim: true
    },
    tipoMovimiento:{
        type: Number,
        require: true,
        trim: true
    }
},{
    timestamps:true
});
const Inventario = mongoose.model("Inventario",inventarioSchema);
export default Inventario;