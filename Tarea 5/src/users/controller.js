const Model = require("./model");

class UsersController {
  async getAll(req, res) {
    const users = await Model.findAll("users");
    res.send(users);
  }

  async getOne(req, res) {
    const userId = req.params.id;
    const user = await Model.findOne(userId, "users");
    res.send(user);
  }
}

module.exports = new UsersController();
