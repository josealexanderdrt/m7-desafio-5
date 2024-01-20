const pagination = (data, limits = 2, page = 1) => {
  const pageInt = Number(page);
  const limitInt = Number(limits);

  const startIndex = (pageInt - 1) * limitInt;
  const endIndex = pageInt * limitInt;

  const pageData = data.slice(startIndex, endIndex);
  const totaldata = pageData.length;
  const totalStockData = pageData.reduce((sum, joya) => sum + joya.stock, 0);
  const totaldataAndStock = {
    "Total Joyas on this Page": totaldata,
    "Total Stock of joyas show on this Page": totalStockData,
    "You are in Page": `${pageInt}`
  };

  const results = { ...totaldataAndStock };

  if (endIndex < data.length) {
    results.next = {
      page: pageInt + 1,
      limit: limitInt,
    };
  }

  if (startIndex > 0) {
    results.previous = {
      page: pageInt - 1,
      limit: limitInt,
    };
  }

  results.results = data.slice(startIndex, endIndex).map((joya) => {
    return {
      nombre: joya.nombre,
      link: `http://localhost:3000/joyas/${joya.id}`,
    };
  });

  return results;
};

export default pagination;
