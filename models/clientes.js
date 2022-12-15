const modelcliente = {
    queryGetcliente: "SELECT * FROM cliente",
    queryGetclienteById: `SELECT * FROM cliente WHERE ID = ?`,
    queryDeletedcliente: `UPDATE cliente SET especificaciones = 'N'WHERE ID ?`,
    queryclienteexist: `SELECT Nombre FROM cliente WHERE Nombre = '?'`,
    queryaddcliente: `INSERT INTO cliente (
       Usuario,
       Nombre,
       Apellidos,
       Contrasena,
       Especificaciones
    ) VALUES (
       '?',
       '?',
       '?',
       ?,
       '?'
         
    )`,
    queryGetclienteinfo: `SELECT Usuario, Nombre, Apellidos, Contrasena, Especificaciones 
    FROM  cliente
    WHERE cliente = '?'`,

   queryupdatebycliente:`UPDATE cliente SET (
       Nombre,= '?',
       Apellidos,='?',
       Usuario,=? ,
       Contrasena,='?',
       Especificaciones='?',
       WHERE clientes = '?'`,

   querysignIn: `SELECT Usuario, Contrasena, Activo FROM cliente WHERE cliente = '?'`,    
}
const updateclientes = (
  Nombre,
  Apellidos,
  especificaciones,
  Contrasena,
  Usuario,
) => {
return `UPDATE cliente SET (
  Nombre,= '${Nombre}',
  Apellidos,='${Apellidos}',
  contrasena,= ${Contrasena},
  especificaciones,=${especificaciones},
  Usuario,=${Usuario}
    WHERE cliente = '${cliente}'`
}


module.exports = {modelcliente ,updateclientes}