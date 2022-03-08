const router = require("express").Router()
const routerProducts = require("./products")


router.use("/products", routerProducts)



module.exports = router