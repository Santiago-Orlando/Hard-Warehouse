const UserServices = require("../services/User")

class UserController {

    static async addUser(req, res) {

        const { error, response } = await UserServices.addUser(req.body)
        
        if(error) res.status(400).send(response)
        res.status(201).send(response)
    }
}

module.exports = UserController