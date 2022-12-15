const modelclientes = {
    querygetcliente: "SELECT * FROM cliente",
    queryGetclienteById: `SELECT * FROM cliente WHERE ID = ?`,
    queryDeletedcliente: `UPDATE cliente SET especificaciones = 'N'WHERE ID ?`,
    queryclienteexist: `SELECT Nombre FROM cliente WHERE Nombre = '?'`,
    queryaddcliente: `INSERT INTO cliente (
       Usuario,
       Nombre,
       Apellidos,
       contrasena,
       especificaciones
    ) VALUES (
       '?',
       '?',
       '?',
       ?,
       '?',
       '?',
       '?',
       '?'
      
    )`,
    queryGetclienteinfo: `SELECT usuario, Nombre, Apellidos, contrasena, especificaciones 
    FROM  cliente
    WHERE cliente = '?'`,

   queryupdatebycliente:`UPDATE personal SET (
       Nombre,= '?',
       Apellidos,='?',
       usuario,=? ,
       contrasena,='?',
       especificaciones='?',
       WHERE clientes = '?'`,

   querysignIn: `SELECT Usuario, Contrasena, Activo FROM personal WHERE personal = '?'`,    
}
const updateclientes = (
  Nombre,
  Apellidos,
  contrasena,
  especificaciones,
  Contrasena,
  usuario,
) => {
return `UPDATE personal SET (
  Nombre,= '${Nombre}',
  Apellidos,='${Apellidos}',
  contrasena,= ${Contrasena},
  especificaciones,=${especificaciones},
  usuario,=${usuario},
  contrasena,=${contrasena}
    WHERE personal = '${personal}'`
}


module.exports = {modelclientes ,updateclientes}