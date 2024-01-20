import pool from "../../db/connectionDb.js";

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

export { getJoyas, limitJoyas };
