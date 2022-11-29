import mongoose from "mongoose";

const productoSchema = mongoose.Schema({
    idCategoria:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categoria",
        require: true,
        trim: true
    },
    idImpuesto:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Impuesto",
        require: true,
        trim: true
    },
    referenciaProducto:{
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    nombreProducto:{
        type: String,
        require: true,
        trim: true
    },
    descripcionProducto:{
        type: String,
        require: true,
        trim: true
    },
    precioCosto:{
        type: Number,
        require: true,
        trim: true
    },
    precioVenta:{
        type: Number,
        require: true,
        trim: true
    },
    estadoProducto:{
        type: Number,
        require: true,
        trim: true,
    }
},{
    timestamps:true
});
const Producto = mongoose.model("Producto",productoSchema);
export default Producto;