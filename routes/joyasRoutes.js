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
router.get("/joyas/:id", getIdJoya);
router.get("/joyas/filtros", getAllJoyasPagination);







router.get("/joyas-limit", getJoyasLimit);
router.get("/joyas-limit-and-order", getJoyasLimitAndOrder);

router.get("/joyas-filter", getJoyasFilter);


export default router;
