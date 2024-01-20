import express from "express";
import {
  getIdJoya,
  getJoyasLimit,
  getJoyasLimitAndOrder,
  getJoyasFilter,
  getAllJoyasPagination
} from "../src/controllers/joyasController.js";
const router = express.Router();

router.get("/joyas", getAllJoyasPagination);
router.get("/joyas/filtros", getJoyasFilter);
router.get("/joyas/:id", getIdJoya);





export default router;
