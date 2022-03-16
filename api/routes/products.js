const router = require("express").Router()
const ProductsController = require("../controllers/Products")
const { isAdmin } = require("../middleware/isAdmin")

router.post("/add", isAdmin , ProductsController.newProduct)
router.post("/update/:id", isAdmin, ProductsController.updateProduct)
router.get("/showProducts", ProductsController.getProducts)
router.get("/showOne/:id", ProductsController.getProduct)
router.get("/searchByTitle/:title", ProductsController.searchByTitle)
router.delete("/delete/:id", isAdmin, ProductsController.deleteProduct)
router.post("/rating/:id", ProductsController.reviewProduct)


module.exports = router
