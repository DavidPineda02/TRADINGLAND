import express from "express";
import { getTipo, oneTipo, addTipo, deleteTipo, updateTipo } from "../controllers/tipoDinero.controllers.js";

const router = express.Router();

router.get("/all", getTipo);
router.get("/one/:id", oneTipo);
router.post("/add", addTipo);
router.delete("/del/:id", deleteTipo);
router.put("/upd/:id", updateTipo);

export default router;