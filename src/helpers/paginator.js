const pagination = (data, items, page ) => {

  const pageInt = Number(page);
  const itemsInt = Number(items);

 
  const startIndex = (pageInt - 1) * itemsInt;
  const endIndex = pageInt * itemsInt;


  const results = {};

  // valido si hay una página siguiente y agrego la info
  if (endIndex < data.length) {
    results.next = {
      page: pageInt + 1,
      items: itemsInt,
    };
  }

 // valido si hay una página anterior y agrego la info
  if (startIndex > 0) {
    results.previous = {
      page: pageInt - 1,
      items: itemsInt,
    };
  }

   // agrego la porción paginada de los datos a los resultados
  results.results = data.slice(startIndex, endIndex);
  return results;
};

export default pagination;