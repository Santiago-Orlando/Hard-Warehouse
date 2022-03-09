const router = require("express").Router()
const passport = require("passport")

const UserController = require("../controllers/Users")

router.post("/login", passport.authenticate("local"), UserController.login)
router.post("/register", UserController.register)
router.post("/logout", UserController.logout)
router.put("/updateUser/:id", UserController.updateUser)
router.get("/me", UserController.me)
router.put("/makeAdmin/:id", UserController.makeAdmin)
router.delete("/deleteUser/:id", UserController.deleteUser)
router.get("/getUsers", UserController.getUsers)

module.exports = router

