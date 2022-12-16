const {Router} = require("express")

const { gettipo_fallas, addtipo_falla,gettipo_fallasByID,deletetipo_fallaByID } = require("../controllers/tipo_falla")

const router =  Router()

// http://localhost:4000/api/v1/usuarios/id/2
///GET///
router.get("/", gettipo_fallas)
router.get("/id/:id", gettipo_fallasByID)

///POST///
router.post("/", addtipo_falla)



///DELETE///
router.delete("/" , deletetipo_fallaByID)





module.exports = router