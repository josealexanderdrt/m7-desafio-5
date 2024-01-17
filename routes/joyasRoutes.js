import express from "express";
import { getAllJoyas } from "../src/controllers/joyasController.js"
const router = express.Router();

router.get("/joyas", getAllJoyas);

export default router;
