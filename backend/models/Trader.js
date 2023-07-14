import mongoose from "mongoose";

const traderSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true
    },
    edad:{
        type: String,
        required: true,
        trim: true
    },
    nacionalidad:{
        type: String,
        required: true,
        trim: true
    },
    presupuesto:{
        type: String,
        required: true,
        trim: true
    },
},
{
    timestamps: true
}
);

const Trader = mongoose.model("traders", traderSchema);

export default Trader;