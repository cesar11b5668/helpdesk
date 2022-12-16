const { request, response } = require("express");
const pool = require("../db/connection");
const {modelotipo_fallas} = require("../models/tipo_fallas");
const gettipo_fallas = async (req = request, res = response) => {
 let conn;

 try {
    conn = await pool.getConnection()

    const tipo_fallas = await conn.query(modelofallas.queryGetfallas, (error) => {throw new Error(error)})

    if (!tipo_fallas) {
        res.status(404).json({msg: "no se encontraron registros"})
        return
    }
    res.json({tipo_fallas})
 } catch (error) {
    console.log(error)
    res.status(500).json({error})
 } finally{
    if (conn) {
        conn.end()
    }
 }
}
const gettipo_fallasByID = async (req = request, res = response) => {
   const {id} = req.params
   let conn;
  
   try {
      conn = await pool.getConnection()
  
      const [tipo_falla] = await conn.query(modelofallas.queryGettipo_fallasById,[id], (error) => {throw new Error(error)})
  
      if (!tipo_falla) {
          res.status(404).json({msg: `no se encontro registro con el ID ${id}`})
          return
      }
      res.json({tipo_falla})
   } catch (error) {
      console.log(error)
      res.status(500).json({error})
   } finally{
      if (conn) {
          conn.end()
      }
   }
  }
  const deletetipo_fallaByID = async (req = request, res = response) => {
   const {id} = req.params
   let conn;
  
   try {
      conn = await pool.getConnection()
      const {affectedRows} = await conn.query( modelotipo_fallas.queryDeletedtipo_falla,[id], (error) => {throw new Error(error)})
  
      if (affectedRows=== 0) {
          res.status(404).json({msg: `No se pudo eliminar el tipo_falla con el registro con el ID ${id}`})
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
  const addtipo_falla = async (req = request, res = response) => {
   const {
      id,
      Nombre_de_falla,
      Descripcion_de_falla,
      Prioridad_de_falla
   } = req.body
   if(      
   !id||
   !Nombre_de_falla||
   !Descripcion_de_falla||
   !Prioridad_de_falla
   )
   {
      res.status(400).json({msg: "Falta informacion del tipo_falla"})
      return
   }
   let conn;
  
   try {
      conn = await pool.getConnection()

      const tipo_falla = await conn.query(modelotipo_fallas.querytipo_fallaexist,[tipo_falla])

      if(!tipo_falla){
         res.status(403).json({msg: `El tipo_falla ${tipo_falla} ya se encuentra registrado`})
         return
      }

      
      const affectedRows = await conn.query(modelotipo_fallas.queryaddtipo_falla[
         id,
         Nombre_de_falla,
         Descripcion_de_falla,
         Prioridad_de_falla
      
      ] , (error) => {throw new Error(error)})
      

      if (affectedRows === 0) {
         res.status(404).json({msg: `no se pudo agregar el registro del tipo_falla ${tipo_falla}`})
         return
   }
      res.json({msg: `el tipo_falla ${tipo_falla} se agrego correctamente :D`})
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
 
module.exports = {gettipo_fallas, gettipo_fallasByID, deletetipo_fallaByID, addtipo_falla}