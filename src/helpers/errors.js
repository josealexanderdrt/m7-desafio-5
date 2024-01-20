const ERRORS = [
    {code: 23502, status: 400, message: "Los cambos  no puede estar vacio" },
    {code: 22001, status: 400, message: "Estan tratando de insertar un valor con una longitud no permitida por la tabla"},
    {code: '22P02', status: 400, message: "Error de formato: entrada no válida"}, 
    { code: '42P01', status: 400, message: "Error: la relación no existe" },
    { code: '42601', status: 400, message: "Error de sintaxis en la consulta SQL"}
]

export default ERRORS