import { getJoyas, limitJoyas } from "../models/joyaModel.js";
import { findError } from "../utilis.js/utilis.js";

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
    return res
      .status(responseError.status)
      .json({ error: responseError.message });
  }
};

export { getAllJoyas, getJoyasLimit };
