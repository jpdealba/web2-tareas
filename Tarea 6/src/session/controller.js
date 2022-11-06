const SessionModel = require("./model");

class SessionController {
  postOne(req, res) {
    const Session = new SessionModel();
    Session.createOne(req.body).then((resp) => {
      res.json({ token: resp });
    });
  }
}

module.exports = new SessionController();
