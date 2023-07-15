import TipoDinero from "../models/TipoDinero.js";

const getTipo = async (req, res) =>{
    const tipoDinero = await TipoDinero.find();
    res.json(tipoDinero);
}

const oneTipo = async (req, res) =>{
    const tipoDinero = await TipoDinero.findOne({_id: req.params.id});
    res.json(tipoDinero);
}

const addTipo = async (req, res) =>{
    const tipoDinero = new TipoDinero(req.body);
    try {
        const nuevoTipo = await tipoDinero.save();
        res.json(nuevoTipo);
    } catch (error) {
        console.log(error);
    }
}

const deleteTipo = async (req, res) =>{
    try {
        await TipoDinero.deleteOne({_id: req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "TipoDinero no existe"})
    }
}

const updateTipo = async (req, res) =>{
    try {
        const tipoDinero = await TipoDinero.findOne({_id: req.params.id});

        if (req.body.nombre) {
            tipoDinero.nombre = req.body.nombre
        }

        if (req.body.descripcion) {
            tipoDinero.descripcion = req.body.descripcion
        }

        await tipoDinero.save();
        res.send(tipoDinero);
    } catch (error) {
        res.status(404);
        res.send({error: "TipoDinero no existe"})
    }
}

export { getTipo, oneTipo, addTipo, deleteTipo, updateTipo }