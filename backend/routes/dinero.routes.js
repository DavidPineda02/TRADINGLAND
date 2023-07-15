import express from "express";
import { getDinero, oneDinero, addDinero, deleteDinero, updateDinero } from "../controllers/dinero.controllers.js";

const router = express.Router();

router.get("/all", getDinero);
router.get("/one/:id", oneDinero);
router.post("/add", addDinero);
router.delete("/del/:id", deleteDinero);
router.put("/upd/:id", updateDinero);

export default router;