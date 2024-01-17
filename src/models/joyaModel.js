import pool from "../../db/connectionDb.js";

const getJoyas = async () => {
  const SQLquery = {
    text: "SELECT * FROM inventario",
  };
  const response = await pool.query(SQLquery);
  return response.rows;
};

export{ getJoyas };
