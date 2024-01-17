import { getJoyas } from "../models/joyaModel.js";

const getAllJoyas = async (req, res) => {
  try {
    const joyas = await getJoyas();
    res.status(200).json({ Joyas: joyas });
  } catch (error) {
    console.error(error);
  }
};

export { getAllJoyas };
