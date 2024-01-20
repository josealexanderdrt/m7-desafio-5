const HATEOAS = async (entity, data, items, page ) => {
  const results = data
    .map((joya) => {
      return {
        nombre: joya.nombre,

        link: `http://localhost:3000/api/v1/${entity}/${joya.id}`,
      };
    })
    .slice(page, items);
  const total = data.length;
  const totalStock = data.reduce((sum, joya) => sum + joya.stock, 0);
  const dataHateoas = {
    "Total Itens": total,
    "Total Stock": totalStock,
    results,
  };
  return dataHateoas;
};

export default HATEOAS;
