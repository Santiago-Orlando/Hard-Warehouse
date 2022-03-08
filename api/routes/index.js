const router = require("express").Router()

const routerProducts = require("./products")
const routerUsers = require("./users")

router.use("/products", routerProducts)
router.use("/users", routerUsers)


module.exports = router