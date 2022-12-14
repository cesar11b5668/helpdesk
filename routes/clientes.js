const {Router} = require("express")
const { getclientes, addcliente, signIn, updateclientesBycliente, getclienteByID,newPassword,deleteclienteByID} = require("../controllers/clientes")

const router =  Router()

// http://localhost:4000/api/v1/usuarios/id/2
///GET///
router.get("/", getclientes)
router.get("/id/:id", getclienteByID)

///POST///
router.post("/", addcliente)
router.post("/signin", signIn)

///put///
router.get("/", updateclientesBycliente)
router.put("/newPassword",newPassword)

///DELETE///
router.delete("/" , deleteclienteByID)





module.exports = router