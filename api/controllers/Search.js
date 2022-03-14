const SearchServices = require("../services/Search");

class SearchControllers {
  static async search(req, res) {
    const { error, response } = await SearchServices.search(req.params.tag);

    if (error) return res.status(400).send(response);
    return res.status(201).send(response);
  }
}

module.exports = SearchControllers;
