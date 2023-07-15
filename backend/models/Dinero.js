import mongoose from "mongoose";

const dineroSchema = mongoose.Schema({
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
});

const Dinero = mongoose.model("dineros", dineroSchema);

export default Dinero;