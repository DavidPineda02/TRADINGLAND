import Trader from "../models/Trader.js";

const getTrader = async (req, res) =>{
    const trader = await Trader.find();
    res.json(trader);
}

const oneTrader = async (req, res) =>{
    const trader = await Trader.findOne({_id: req.params.id});
    res.json(trader);
}

const addTrader = async (req, res) =>{
    const trader = new Trader(req.body);
    try {
        const nuevoTrader = await trader.save();
        res.json(nuevoTrader)
    } catch (error) {
        console.log(error);
    }
}

const deleteTrader = async (req, res) =>{
    try {
        await Trader.deleteOne({_id: req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Trader no Existe"})
    }
}

const updateTrader = async (req, res) =>{
    try {
        const trader = await Trader.findOne({_id: req.params.id});

        if (req.body.nombre) {
            trader.nombre = req.body.nombre
        }

        if (req.body.edad) {
            trader.edad = req.body.edad
        }

        if (req.body.nacionalidad) {
            trader.nacionalidad = req.body.nacionalidad
        }

        if (req.body.presupuesto) {
            trader.presupuesto = req.body.presupuesto
        }
        await trader.save();
        res.send(trader);
    } catch (error) {
        res.status(404);
        res.send({error: "Trader no Existe"});
    }
}

export {
    getTrader,
    oneTrader,
    addTrader,
    deleteTrader,
    updateTrader
}