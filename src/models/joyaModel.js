import pool from "../../db/connectionDb.js";
import format from "pg-format";

const getJoyas = async () => {
  const SQLquery = {
    text: "SELECT * FROM inventario",
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

const orderAndLimitJoyas = async (
  order_by = " id_ASC",
  limits = 6,
  page = 0
) => {
  const [attribute, direction] = order_by.split("_");
  const offset = page * limits;
  const formattedQuery = format(
    "SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s",
    attribute,
    direction, 
    limits,
    offset
  );
  console.log(formattedQuery);
  const response = await pool.query(formattedQuery);
  return response.rows;
};

export { getJoyas, limitJoyas, orderAndLimitJoyas };
