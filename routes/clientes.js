const {Router} = require("express")
const { getcliente, addcliente, signIn, updateclienteBycliente, getclienteByID,newPassword,deleteclienteByID} = require("../controllers/clientes")

const router =  Router()

// http://localhost:4000/api/v1/usuarios/id/2
///GET///
router.get("/", getcliente)
router.get("/id/:id", getclienteByID)
router.get("/", updateclienteBycliente)

///POST///
router.post("/", addcliente)
router.post("/signin", signIn)

///put///
router.put("/newPassword",newPassword)

///DELETE///
router.delete("/" , deleteclienteByID)





module.exports = router