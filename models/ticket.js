const modelticket = {
    queryGetUsers: "SELECT * FROM ticket",
    queryGetUsersById: `SELECT * FROM ticket WHERE ID = ?`,
    queryDeleteduser: `UPDATE ticket SET Activo = 'N'WHERE ID ?`,
    queryuserexist: `SELECT Nombre_falla FROM ticket WHERE fecha = '?'`,
    queryadduser: `INSERT INTO ticket (
       ID,
       fecha,
       especificaciones,
       personal_asignado,
       tipo_falla,
       responsable
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

module.exports = modelticket