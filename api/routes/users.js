const router = require("express").Router()

const UserController = require("../controllers/Users")


router.post("/addUser", UserController.addUser)


module.exports = router

//6227a03209414d195b8ac42c