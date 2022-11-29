import mongoose from "mongoose";

const detalleFacturaSchema = mongoose.Schema({
    idFactura:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Factura",
        require: true,
        trim: true
    },
    idProducto:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Producto",
        require: true,
        trim: true
    },
    cantidadProducto:{
        type: Number,
        require: true,
        trim: true
    },
    precioUnitario:{
        type: Number,
        require: true,
        trim: true
    },
    totalIva:{
        type: Number,
        require: true,
        trim: true
    },
    totalLinea:{
        type: Number,
        require: true,
        trim: true
    }
},{
    timestamps:true
});
const DetalleFactura = mongoose.model("DetalleFactura",detalleFacturaSchema);
export default DetalleFactura;