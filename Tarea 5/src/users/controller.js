const UserModel = require("./model");

class UsersController {
  getAll(req, res) {
    const User = new UserModel();
    User.findAll().then((res) => {
      res.send(res);
    });
  }

  getOne(req, res) {
    const User = new UserModel();
    const userId = req.params.id;
    User.findOne(userId).then((res) => {
      res.send(res);
    });
  }
}

module.exports = new UsersController();
