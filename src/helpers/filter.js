const createQuery = (entity, filters) => {
  const table = entity.toLowerCase();
  let query = `SELECT * FROM ${table} WHERE 1 = 1`;

  const filterEntries = Object.entries(filters);
  const values = [];
  console.log("impresion de filterEntries", filterEntries);

  for (const [key, value] of filterEntries) {
    if (value) {
      if (key == "precio_max") {
        query += ` AND precio <= $${values.length + 1}`;
      } else if (key == "precio_min") {
        query += ` AND precio >= $${values.length + 1}`;
      } else {
        query += ` AND ${key} = $${values.length + 1}`;
      }

      values.push(value);
    }
  }
  return { query, values };
};

export default createQuery;
