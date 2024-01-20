import express from "express";
import { getAllJoyas, getJoyasLimit } from "../src/controllers/joyasController.js"
const router = express.Router();

router.get("/joyas", getAllJoyas);
router.get("/joyas-limit", getJoyasLimit)

export default router;
