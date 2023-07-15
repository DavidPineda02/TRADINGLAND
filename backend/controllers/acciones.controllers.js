import Acciones from "../models/Acciones.js";

const getAcciones = async (req, res) =>{
    const acciones = await Acciones.find();
    res.json(acciones);
}

const oneAcciones = async (req, res) =>{
    const acciones = await Acciones.findOne({_id: req.params.id});
    res.json(acciones);
}

const addAcciones = async (req, res) =>{
    const acciones = new Acciones(req.body);
    try {
        const nuevaAccion = await acciones.save();
        res.json(nuevaAccion)
    } catch (error) {
        console.log(error);
    }
}

const deleteAcciones = async (req, res) =>{
    try {
        await Acciones.deleteOne({_id: req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Accion no exixste"})
    }
}

const updateAcciones = async (req, res) =>{
    try {
        const acciones = await Acciones.findOne({_id: req.params.id});

        if (req.body.nombre) {
            acciones.nombre = req.body.nombre
        }

        if (req.body.precio) {
            acciones.precio = req.body.precio
        }

        if (req.body.descripcion) {
            acciones.descripcion = req.body.descripcion
        }

        await acciones.save();
        res.send(acciones)
    } catch (error) {
        res.status(404);
        res.send({error: "Accion no existe"})
    }
}

export { getAcciones, oneAcciones, addAcciones, deleteAcciones, updateAcciones }