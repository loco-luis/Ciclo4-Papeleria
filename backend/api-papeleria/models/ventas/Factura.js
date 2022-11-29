import mongoose from "mongoose";

const facturaSchema = mongoose.Schema({
    idCliente:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
        require: true,
        trim: true
    },
    fechaFactura:{
        type: Date,
        require: true,
        trim: true
    },
    numeroFactura:{
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    subtotalFactura:{
        type: Number,
        require: true,
        trim: true
    },
    ivaFactura:{
        type: Number,
        require: true,
        trim: true
    },
    totalFactura:{
        type: Number,
        require: true,
        trim: true
    },
    observacionesFactura:{
        type: String,
        require: true,
        trim: true,
        unique: true
    }
},{
    timestamps:true
});
const Factura = mongoose.model("Factura",facturaSchema);
export default Factura;