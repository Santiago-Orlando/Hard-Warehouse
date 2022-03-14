const SearchServices = require("../services/Search");

class SearchControllers {
  static async search(req, res) {
    const { page } = req.query;
    const { tags } = req.body;
    const { error, response } = await SearchServices.search(page, tags);

    if (error) return res.status(400).send(response);
    return res.status(201).send(response);
  }
}

module.exports = SearchControllers;
