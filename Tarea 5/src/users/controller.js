const Model = require("./model");

class UsersController {
  async getAll(req, res) {
    const users = await Model.findAll();
    res.send(users);
  }

  async getOne(req, res) {
    const userId = req.params.id;
    const user = await Model.findOne(userId);
    res.send(user);
  }
}

module.exports = new UsersController();
