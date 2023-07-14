import express from "express";
import { getTrader, oneTrader, addTrader, deleteTrader, updateTrader } from "../controllers/trader.controller.js";

const router = express.Router();

router.get("/all", getTrader);
router.get("/one/:id", oneTrader);
router.post("/add", addTrader);
router.delete("/del/:id", deleteTrader);
router.put("/upd/:id", updateTrader);

export default router;