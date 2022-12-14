const {Router} = require("express")
const { getTicket,GetTicketById,addticket,deleteticketByID} = require("../controllers/ticket")

const router =  Router()

// http://localhost:4000/api/v1/usuarios/id/2
///GET///
router.get("/", getTicket)
router.get("/id/:id", GetTicketById)

///POST///
router.post("/", addticket)



///DELETE///
router.delete("/" , deleteticketByID)





module.exports = router