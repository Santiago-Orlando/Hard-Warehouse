const router = require("express").Router()
const SearchControllers = require("../controllers/Search")

router.get("/" , SearchControllers.search);

module.exports = router;






