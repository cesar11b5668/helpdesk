const modelpersonal = {
    queryGetUsers: "SELECT * FROM cliente",
    queryGetUsersById: `SELECT * FROM cliente WHERE ID = ?`,
    queryDeleteduser: `UPDATE cliente SET especificaciones = 'N'WHERE ID ?`,
    queryuserexist: `SELECT Nombre FROM cliente WHERE Nombre = '?'`,
    queryadduser: `INSERT INTO cliente (
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
    querygetuserinfo: `SELECT usuario, Nombre, Apellidos, contrasena, especificaciones 
    FROM  clientes
    WHERE clientes = '?'`,

   queryupdatebyusuario:`UPDATE personal SET (
       Nombre,= '?',
       Apellidos,='?',
       Edad,=? ,
       Genero,='?',
       Fecha_nacimiento='?',
       WHERE Usuario = '?'`,

   querysignIn: `SELECT Usuario, Contrasena, Activo FROM personal WHERE personal = '?'`,    
}
const updateUsuario = (
  Nombre,
  Apellidos,
  contrasena,
  departamento,
  Contrasena,
  usuario,
) => {
return `UPDATE personal SET (
  Nombre,= '${Nombre}',
  Apellidos,='${Apellidos}',
  contrasena,= ${Contrasena},
  departamento,=${departamento},
  usuario,=${usuario},
  contrasena,=${contrasena}
    WHERE personal = '${personal}'`
}


module.exports = {modelclientes ,updateclientes}