import express from "express";
import {getAcciones, oneAcciones, addAcciones, deleteAcciones, updateAcciones } from "../controllers/acciones.controllers.js"

const router = express.Router();

router.get("/all", getAcciones);
router.get("/one/:id", oneAcciones);
router.post("/add", addAcciones);
router.delete("/del/:id", deleteAcciones);
router.put("/upd/:id", updateAcciones);

export default router;