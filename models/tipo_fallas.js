const modelotipo_fallas = {    
queryGettipo_fallas: "SELECT * FROM tipo_de_fallas",
queryGetUsersById: `SELECT * FROM tipo_de_fallas WHERE ID = ?`,
    queryDeleteduser: `UPDATE ticket SET Activo = 'N'WHERE ID ?`,
    queryuserexist: `SELECT Nombre_falla FROM tipo_de_falla WHERE Nombre_de_falla = '?'`,
    queryadduser: `INSERT INTO tipo_de_falla (
       
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
    querygetuserinfo: `SELECT ID,fecha,especificaciones,personal_asignado,tipo_falla,responsable 
    FROM ticket 
    WHERE ticket = '?'`,

   queryupdatebyusuario:`UPDATE personal SET (
       ID,= '?',
       Fecha,='?',
       especificaciones,=? ,
       personal,='?',
       tipo_falla='?',
       WHERE ticket = '?'`,

   }

module.exports = modelotipo_fallas


