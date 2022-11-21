const{Router} = require("express")
const {addequip, updateEquipo, getEquipo, getEquipoByID, deleteEquipoByID} = require("../controllers/Equipo")

const router = Router()

//http://localhost:4000/api/v1/Equipo/
//get

router.get("/", getEquipo)

router.get("/id/:id", getEquipoByID)

//delete
router.delete("/id/:id", deleteEquipoByID)

//use
router.post("/", addequip)

//update
router.put("/", updateEquipo)

module.exports = router