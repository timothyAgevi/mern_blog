const router = require("express").Router()
const userService =require(" ./../services/User.service")
const s = new userService()

router.post("/login",s.login)
router.post("/register",s.register)
router.put("/login",s.updateprofile)

module.exports=router