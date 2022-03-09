const UserServices = require("../services/User");
const { genPassword } = require("../lib/passwordUtils");

class UserController {
  static async register(req, res) {
    const saltHash = genPassword(req.body.password);
    const { salt, hash } = saltHash;

    req.body.password = hash;
    req.body.salt = salt;

    const { error, response } = await UserServices.register(req.body);

    if (error) res.status(400).send(response);
    res.status(201).send(response);
  }

  static login(req, res) {
    res.send(req.user);
  }

  static logout(req, res) {
    req.logout();
    res.sendStatus(200);
  }

  static async updateUser(req, res) {
    const { id } = req.params;
    const { error, response } = await UserServices.updateUser(id, req.body);

    if (error) res.status(400).send(response);
    res.status(201).send(response);
  }

  static me(req, res) {
    if (req.user) res.send(req.user);
    req.sendStatus(404);
  }
  static async makeAdmin(req, res) {
    const { id } = req.params;
    const { error, response } = await UserServices.makeAdmin(id);

    if (error) res.status(400).send(response);
    res.status(201).send(response);
  }
  static async deleteUser(req, res) {
    const { id } = req.params;
    const { error, response } = await UserServices.deleteUser(id);

    if (error) res.status(404).send(response);
    res.status(202).send(response);
  }
  static async getUsers(req, res) {
    const { error, response } = await UserServices.getUsers();

    if (error) res.status(404).send(response);
    res.status(200).send(response);
  }
}

module.exports = UserController;
