import {
  getJoyasById,
  limitJoyas,
  getOrderAndLimitJoyas,
  joyasFilter,
  getJoyaHateos,
} from "../models/joyaModel.js";
import { findError } from "../utilis.js/utilis.js";
import pagination from "../helpers/paginator.js";
import HATEOAS from "../helpers/hateoas.js";

const getAllJoyasPagination = async (req, res) => {
  try {
    const { limits, page, order_by } = req.query;
    const joyas = await getOrderAndLimitJoyas(order_by);
    const paginationData = pagination(joyas, limits, page);
    res.status(200).json(paginationData);
  } catch (error) {
    const errorFound = findError(error.code);
    const responseError = errorFound[0] || {
      status: 500,
      message: error.message,
    };
    console.log(error);
    return res
      .status(responseError.status)
      .json({ error: responseError.message });
  }
};

const getIdJoya = async (req, res) => {
  try {
    const {id} = req.params ; 
    const joyas = await getJoyasById(id);
    res.status(200).json({ Joya: joyas });
  } catch (error) {
    const errorFound = findError(error.code);
    const responseError = errorFound[0] || {
      status: 500,
      message: error.message,
    };
    console.log(error);
    return res
      .status(responseError.status)
      .json({ error: responseError.message });
  }
};

const getJoyasLimit = async (req, res) => {
  try {
    const { limits } = req.query;
    const joyas = await limitJoyas(limits);
    res.status(200).json({ joyas: joyas });
  } catch (error) {
    const errorFound = findError(error.code);
    const responseError = errorFound[0] || {
      status: 500,
      message: "Error interno del servidor",
    };
    console.log(error);
    return res
      .status(responseError.status)
      .json({ error: responseError.message });
  }
};

const getJoyasLimitAndOrder = async (req, res) => {
  try {
    console.log("buscar: ");
    const { order_by, limits, page } = req.query;
    const joyas = await orderAndLimitJoyas(order_by, limits, page);
    res.status(200).json({ joyas: joyas });
  } catch (error) {
    const errorFound = findError(error.code);
    const responseError = errorFound[0] || {
      status: 500,
      message: error.message,
    };
    console.log(error);
    return res
      .status(responseError.status)
      .json({ error: responseError.message });
  }
};

const getJoyasFilter = async (req, res) => {
  try {
    const { filters } = req.query;
    const joyas = await joyasFilter(filters);
    console.log("joyas", joyas);
    console.log(filters);
    res.status(200).json({ joyas: joyas });
  } catch (error) {
    const errorFound = findError(error.code);
    const responseError = errorFound[0] || {
      status: 500,
      message: error.message,
    };
    console.log(error);
    return res
      .status(responseError.status)
      .json({ error: responseError.message });
  }
};

const getAllJoyasHateoas = async (req, res) => {
  try {
    const joyas = await getJoyaHateos();
    const joyasWitHateoas = await HATEOAS("Joyas", joyas);
    res.status(200).json({ joyas: joyasWitHateoas });
  } catch (error) {
    console.log("error", error);
  }
};

export {
  getIdJoya,
  getJoyasLimit,
  getJoyasLimitAndOrder,
  getAllJoyasPagination,
  getJoyasFilter,
  getAllJoyasHateoas,
};
