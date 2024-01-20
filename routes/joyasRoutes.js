import express from "express";
import { getAllJoyas, getJoyasLimit, getJoyasLimitAndOrder, getJoyasPagination } from "../src/controllers/joyasController.js"
const router = express.Router();

router.get("/joyas", getAllJoyas);
router.get("/joyas-limit", getJoyasLimit)
router.get("/joyas-limit-and-order", getJoyasLimitAndOrder)
router.get("/joyas-pagination", getJoyasPagination)

export default router;
