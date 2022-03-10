const router = require("express").Router()

const routerProducts = require("./products")
const routerUsers = require("./users")
const routerAuth = require("./auth")

router.use("/products", routerProducts)
router.use("/users", routerUsers)
router.use("/auth", routerAuth)


module.exports = router