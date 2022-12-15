const { request, response } = require("express");
const bcryptjs = require("bcryptjs")
const pool = require("../db/connection");
const {modelcliente, updatecliente} = require("../models/clientes");

const getcliente = async (req = request, res = response) => {
 let conn;

 try {
    conn = await pool.getConnection()

    const clientes = await conn.query(modelcliente.queryGetcliente, (error) => {throw new Error(error)})

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
  
      const [cliente] = await conn.query(modelclientes.queryGetclientesById,[id], (error) => {throw new Error(error)})
  
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
      const {affectedRows} = await conn.query( modelcliente.queryDeletedcliente,[id], (error) => {throw new Error(error)})
  
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
      Especificaciones,
      Contrasena,
   } = req.body
   if(      
   !Nombre||
   !Apellidos||
   !Usuario||
   !Contrasena||
   !Especificaciones
   ){
      res.status(400).json({msg: "Falta informacion del cliente"})
      return
   }
   let conn;
  
   try {
      conn = await pool.getConnection()

      const cliente = await conn.query(modelcliente.queryclienteexist,[cliente])

      if(!cliente){
         res.status(403).json({msg: `El cliente ${cliente} ya se encuentra registrado`})
         return
      }

      const salt = bcryptjs.genSaltSync()
      const ContrasenaCifrada = bcryptjs.hashSync(Contrasena, salt)

      const affectedRows = await conn.query(modelcliente.queryaddcliente[
         Nombre,
         Apellidos,
         Usuario,
         Especificaciones,
         ContrasenaCifrada
      
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
  const updateclienteBycliente = async (req = request, res = response) => {
   const {
      Nombre,
      Apellidos,
      Usuario,
      Especificaciones,
      Contrasena
      
   } = req.body
   console.log({
      Nombre,
      Apellidos,
      Usuario,
      Especificaciones,
      Contrasena})
   if(      
   !Usuario||
   !Nombre||
   !Apellidos||
   !Especificaciones||
   !Contrasena 
   )
   {
      res.status(400).json({msg: "Falta informacion del cliente"})
      return
   }
   let conn;
  
   try {
      conn = await pool.getConnection()

      const cliente = await conn.query(modelcliente.queryGetclienteinfo, [cliente])

      if(cliente){
         res.status(403).json({msg: `El cliente ${cliente} no se encuentra registrado`})
      }

      const affectedRows = await conn.query(updatecliente (Nombre,Apellidos,Usuario,Contrasena,Especificaciones,), (error) => {throw new Error(error)})
      

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
  }
  const signIn = async (req = request, res = response) => {
   const {
      Usuario,
      Contrasena,
      } = req.body
   if(      
   !Usuario||
   !Contrasena
   ){
      res.status(400).json({msg: "Falta informacion del cliente"})
      return
   }
   let conn;
  
   try {
      conn = await pool.getConnection()

      const [cliente] = await conn.query(modelcliente.querysignIn[cliente])

      if(!Usuario || Usuario.Activo === 'N'){
         let code = !Usuario ? 1 : 2;
         res.status(403).json({msg: `El cliente o la contraseña son incorrectas.`, errorCode: code})
         return
      }

      const accesoValido = bcryptjs.compareSync(Contrasena, cliente.Contrasena)

      if (!accesoValido) {
         res.status(403).json({msg: `El cliente o la contraseña son incorrectas.`, errorCode: 3})
         return
      }

      res.json({msg: `el cliente ${cliente} ha iniciado sesion satisfactoriamente`})
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
  const newPassword = async (req=request,res=response)=>{
   const {
       cliente,
       AContrasena,
       NContrasena
   }=req.body

   if(
       !cliente||
       !AContrasena||
       !NContrasena
   ){
       res.status(400).json({msg:"Faltan datos."})
       return
   }

   let conn;

   try{
       conn = await pool.getConnection()
       const [cliente]=await conn.query(`SELECT cliente, Contrasena, Activo FROM clientes WHERE cliente = '${cliente}'`)

       if(!cliente || cliente.Activo == 'N'){
           let code = !cliente ? 1: 2;
           res.status(403).json({msg:`El cliente o la contraseña son incorrectos`,errorCode:code})
           return
       }

       const datosValidos = bcryptjs.compareSync(AContrasena,cliente.Contrasena)

       if(!datosValidos){
           res.status(403).json({msg:`El cliente o la contraseña son incorrectos`,errorCode:"3"})
           return
       }

       const salt = bcryptjs.genSaltSync()
       const contrasenaCifrada = bcryptjs.hashSync(NContrasena,salt) 

       const {affectedRows} = await conn.query(`
           UPDATE clientes SET
               Contrasena='${contrasenaCifrada}'
           WHERE cliente= '${cliente}'
           `,(error)=>{throw new error})
       if(affectedRows===0){
           res.status(404).json({msg:`No se pudo actualizar la contraseña de ${cliente}`})
           return
       }
       res.json({msg:`La contraseña de ${cliente} se actualizo correctamente`})
   }catch(error){
       console.log(error)
       res.status(500).json({error})
   }finally{
       if(conn){
           conn.end()
       }
   }
}

module.exports = {getcliente, getclienteByID, deleteclienteByID, addcliente, updateclienteBycliente, signIn, newPassword}