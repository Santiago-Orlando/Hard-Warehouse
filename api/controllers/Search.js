const SearchServices = require("../services/Search");


class SearchControllers {
    static async search (req , res ) {
        const { error , response } = await SearchServices.search(req.params.tag)

        if (error) res.status(400).send(response);
        res.status(201).send(response);
    } 

}

module.exports = SearchControllers;