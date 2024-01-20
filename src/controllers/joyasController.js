import {
  getJoyas,
  limitJoyas,
  orderAndLimitJoyas,
} from "../models/joyaModel.js";
import { findError } from "../utilis.js/utilis.js";
import pagination from "../helpers/paginator.js";
const getAllJoyas = async (req, res) => {
  try {
    const joyas = await getJoyas();
    res.status(200).json({ Joyas: joyas });
  } catch (error) {
    console.error(error);
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
const getJoyasPagination = async (req, res) => {
  try {
    const { items, page } = req.query;
    const joyas = await getJoyas();
    const paginationData = pagination(joyas, items, page);
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

export {
  getAllJoyas,
  getJoyasLimit,
  getJoyasLimitAndOrder,
  getJoyasPagination,
};
