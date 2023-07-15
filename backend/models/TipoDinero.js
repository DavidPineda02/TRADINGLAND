import mongoose from "mongoose";

const tipoSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true
    },
    descripcion:{
        type: String,
        required: true,
        trim: true
    }
},
{
    timestamps: true
}
);

const TipoDinero = mongoose.model("tipodineros", tipoSchema);

export default TipoDinero;