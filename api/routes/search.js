const router = require("express").Router()
const SearchControllers = require("../controllers/Search")

router.get("/:tag" , SearchControllers.search);

module.exports = router;






