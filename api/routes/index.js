const router = require("express").Router()

const routerProducts = require("./products")
const routerUsers = require("./users")
const routerAuth = require("./auth")
const routerSearch = require("./search")

router.use("/products", routerProducts)
router.use("/users", routerUsers)
router.use("/auth", routerAuth)
router.use("/search/", routerSearch)


module.exports = router