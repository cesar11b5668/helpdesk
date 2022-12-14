const { request, response } = require("express");
const bcryptjs = require("bcryptjs")
const pool = require("../db/connection");
const {modeloclientes, updatecliente} = require("../models/clientes");
const gettipo_fallas = async (req = request, res = response) => {
 let conn;

 try {
    conn = await pool.getConnection()

    const clientes = await conn.query(modelofallas.queryGetfallas, (error) => {throw new Error(error)})

    if (!clientes) {
        res.status(404).json({msg: "no se encontraron registros"})
        return
    }
    res.json({clientes})
 } catch (error) {
    console.log(error)
    res.status(500).json({error})
 } finally{
    if (conn) {
        conn.end()
    }
 }
}
const getclienteByID = async (req = request, res = response) => {
   const {id} = req.params
   let conn;
  
   try {
      conn = await pool.getConnection()
  
      const [cliente] = await conn.query(modelofallas.queryGetclientesById,[id], (error) => {throw new Error(error)})
  
      if (!cliente) {
          res.status(404).json({msg: `no se encontro registro con el ID ${id}`})
          return
      }
      res.json({cliente})
   } catch (error) {
      console.log(error)
      res.status(500).json({error})
   } finally{
      if (conn) {
          conn.end()
      }
   }
  }
  const deleteclienteByID = async (req = request, res = response) => {
   const {id} = req.params
   let conn;
  
   try {
      conn = await pool.getConnection()
      const {affectedRows} = await conn.query( modeloclientes.queryDeletedcliente,[id], (error) => {throw new Error(error)})
  
      if (affectedRows=== 0) {
          res.status(404).json({msg: `No se pudo eliminar el cliente con el registro con el ID ${id}`})
          return
      }
      res.json({msg: `El usario con ID ${id} se elimino correctamente`})
   } catch (error) {
      console.log(error)
      res.status(500).json({error})
   } finally{
      if (conn) {
          conn.end()
      }
   }
  }
  const addcliente = async (req = request, res = response) => {
   const {
      Nombre,
      Apellidos,
      Usuario,
      especificaciones,
      Contrasena,
      Activo
   } = req.body
   if(      
   !Nombre||
   !Apellidos||
   !Usuario||
   !Contrasena||
   !especificaciones||
   !Activo
   ){
      res.status(400).json({msg: "Falta informacion del cliente"})
      return
   }
   let conn;
  
   try {
      conn = await pool.getConnection()

      const cliente = await conn.query(modeloclientes.queryclienteexist,[cliente])

      if(!cliente){
         res.status(403).json({msg: `El cliente ${cliente} ya se encuentra registrado`})
         return
      }

      const salt = bcryptjs.genSaltSync()
      const ContrasenaCifrada = bcryptjs.hashSync(Contrasena, salt)

      const affectedRows = await conn.query(modeloclientes.queryaddcliente[
         Nombre,
         Apellidos,
         Usuario,
         especificaciones,
         ContrasenaCifrada,
         Activo
      
      ] , (error) => {throw new Error(error)})
      

      if (affectedRows === 0) {
         res.status(404).json({msg: `no se pudo agregar el registro del cliente ${cliente}`})
         return
   }
      res.json({msg: `el cliente ${cliente} se agrego correctamente :D`})
      return
   } catch (error) {
      console.log(error)
      res.status(500).json({error})
   } finally{
      if (conn) {
          conn.end()
      }
   }
  }
 
   const {
      Nombre,
      Apellidos,
      Usuario,
      especificaciones,
      Contrasena,
      Activo
   } = req.body
   console.log({cliente,
      Nombre,
      Apellidos,
      Usuario,
      especificaciones,
      Contrasena,
      Activo})
   if(      
   !Usuario||
   !Nombre||
   !Apellidos||
   !especificaciones||
   !Contrasena||
   !Activo   
   )
   {
      res.status(400).json({msg: "Falta informacion del cliente"})
      return
   }
   let conn;
  
   try {
      conn = await pool.getConnection()

      const cliente = await conn.query(modeloclientes.querygetclienteinfo, [cliente])

      if(cliente){
         res.status(403).json({msg: `El cliente ${cliente} no se encuentra registrado`})
      }

      const affectedRows = await conn.query(updatecliente (Nombre,Apellidos,Usuario,Contrasena,especificaciones,Activo), (error) => {throw new Error(error)})
      

      if (affectedRows === 0) {
         res.status(404).json({msg: `no se pudo agregar el registro del cliente ${cliente}`})
         return
   }
      res.json({msg: `el cliente ${cliente} se actualizo correctamente :D`})
   } catch (error) {
      console.log(error)
      res.status(500).json({error})
   } finally{
      if (conn) {
          conn.end()
      }
   }
module.exports = {gettipo_fallas, getclienteByID, deleteclienteByID, addcliente, updateclienteBycliente, signIn, newPassword}