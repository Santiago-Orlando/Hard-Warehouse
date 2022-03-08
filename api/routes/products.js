const router = require("express").Router()
const ProductsController = require("../controllers/Products")

router.post("/add", ProductsController.newProduct)
router.post("/update/:id", ProductsController.updateProduct)
router.get("/showAll", ProductsController.getProducts)
router.get("/showOne/:id", ProductsController.getProduct)
router.delete("/delete/:id", ProductsController.deleteProduct)


module.exports = router
