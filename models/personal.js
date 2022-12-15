const modelpersonal = {
    queryGetpersonal: "SELECT * FROM personal",
    queryGetpersonalById: `SELECT * FROM personal WHERE ID = ?`,
    queryDeletedpersonal: `UPDATE personal SET Activo = 'N'WHERE ID ?`,
    querypersonalexist: `SELECT Nombre FROM personal WHERE Usuario = '?'`,
    queryaddpersonal: `INSERT INTO personal (
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
    querygetpersonalinfo: `SELECT usuario, Nombre, Apellidos, contrasena, departamento 
    FROM personal 
    WHERE personal = '?'`,

   queryupdatebypersonal:`UPDATE personal SET (
       Nombre,= '?',
       Apellidos,='?',
       Edad,=? ,
       Genero,='?',
       Fecha_nacimiento='?',
       WHERE Usuario = '?'`,

   querysignIn: `SELECT Usuario, Contrasena, Activo FROM personal WHERE personal = '?'`,    
}
const updatepersonal = (
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