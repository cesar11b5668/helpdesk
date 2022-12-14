const {Router} = require("express")
const { signIn, updatepersonalBypersonal } = require("../controllers/personal")
const { getpersonal, getpersonalByID , addpersonal,newPassword,deletepersonalByID} = require("../controllers/personal")

const router =  Router()

// http://localhost:4000/api/v1/usuarios/id/2
///GET///
router.get("/", getpersonal)
router.get("/id/:id", getpersonalByID)

///POST///
router.post("/", addpersonal)
router.post("/signin", signIn)

///put///
router.get("/", updatepersonalBypersonal)
router.put("/newPassword",newPassword)

///DELETE///
router.delete("/" , deletepersonalByID)





module.exports = router