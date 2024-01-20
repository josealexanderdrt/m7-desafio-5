import pool from "../../db/connectionDb.js";
import format from "pg-format";
import createQuery from "../helpers/filter.js";



const getOrderAndLimitJoyas = async (order_by = " id_ASC") => {
  const [attribute, direction] = order_by.split("_");
  const formattedQuery = format(
    "SELECT * FROM inventario ORDER BY %s %s",
    attribute,
    direction
  );
  console.log(formattedQuery);
  const response = await pool.query(formattedQuery);
  return response.rows;
};


const getJoyasById = async (id) => {
  const SQLquery = {
    text: "SELECT * FROM inventario WHERE id = $1",
    values: [id]
  };
  const response = await pool.query(SQLquery);
  return response.rows;
};

const limitJoyas = async (limits = 6) => {
  const SQLquery = {
    text: "SELECT * FROM inventario ORDER BY id DESC LIMIT $1",
    values: [limits],
  };
  const response = await pool.query(SQLquery);
  return response.rows;
};


const joyasFilter = async (filters) => {
  const { query, values } = createQuery("inventario", filters);
  const result = await pool.query(query, values);
  return result.rows;
};

const getJoyaHateos = async () => {
  const SQLquery = { text: "SELECT * FROM inventario" };
  const response = await pool.query(SQLquery);
  return response.rows;
};

export { getJoyasById, limitJoyas, getOrderAndLimitJoyas, joyasFilter, getJoyaHateos };
