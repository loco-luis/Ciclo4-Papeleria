import mongoose from "mongoose";

const impuestoSchema = mongoose.Schema({
    nombreImpuesto:{
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    valorImpuesto:{
        type: Number,
        require: true,
        trim: true
    }
},{
    timestamps:true
});
const Impuesto = mongoose.model("Impuesto",impuestoSchema);
export default Impuesto;