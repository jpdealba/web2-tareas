const UserModel = require("./model");

class UsersController {
  getAll(req, res) {
    const User = new UserModel();
    User.findAll().then((resp) => {
      res.send(resp);
    });
  }

  getOne(req, res) {
    const User = new UserModel();
    const userId = req.params.id;
    User.findOne(userId).then((resp) => {
      res.send(resp);
    });
  }

  postOne(req, res) {
    const User = new UserModel();
    User.createOne(req.body).then((resp) => {
      res.send(resp);
    });
  }
}

module.exports = new UsersController();
