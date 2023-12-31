import mongoose from "mongoose";

const accionesSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true
    },
    precio:{
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

const Acciones = mongoose.model("acciones", accionesSchema);

export default Acciones;