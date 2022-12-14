const modelpersonal = {
    queryGetUsers: "SELECT * FROM personal",
    queryGetUsersById: `SELECT * FROM personal WHERE ID = ?`,
    queryDeleteduser: `UPDATE personal SET Activo = 'N'WHERE ID ?`,
    queryuserexist: `SELECT Nombre FROM personal WHERE Usuario = '?'`,
    queryadduser: `INSERT INTO personal (
       Usuario,
       Nombre,
       Apellidos,
       contrasena,
       departamento
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
    querygetuserinfo: `SELECT usuario, Nombre, Apellidos, contrasena, departamento 
    FROM personal 
    WHERE personal = '?'`,

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


module.exports = {modelpersonal ,updatepersonal}