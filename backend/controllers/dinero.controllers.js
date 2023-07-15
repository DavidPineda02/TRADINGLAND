import Dinero from "../models/Dinero.js";

const getDinero = async (req, res) =>{
    const dinero = await Dinero.find();
    res.json(dinero);
}

const oneDinero = async (req, res) =>{
    const dinero = await Dinero.findOne({_id: req.params.id});
    res.json(dinero);
}

const addDinero = async (req, res) =>{
    const dinero = new Dinero(req.body);
    try {
        const nuevoDinero = await dinero.save();
        res.json(nuevoDinero);
    } catch (error) {
        console.log(error);
    }
}

const deleteDinero = async (req, res) =>{
    try {
        await Dinero.deleteOne({_id: req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Dinero no existe"})
    }
}

const updateDinero = async (req, res) =>{
    try {
        const dinero = await Dinero.findOne({_id: req.params.id});

        if (req.body.nombre) {
            dinero.nombre = req.body.nombre
        }

        if (req.body.descripcion) {
            dinero.descripcion = req.body.descripcion
        }

        await dinero.save();
        res.send(dinero);
    } catch (error) {
        res.status(404);
        res.send({error: "Dinero no existe"});
    }
}

export {getDinero, oneDinero, addDinero, deleteDinero, updateDinero}