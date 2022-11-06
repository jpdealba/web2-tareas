const database = require("./../../database/database");
const jwt = require("jsonwebtoken");

class Session {
  async createOne(data) {
    return jwt.sign(
      { email: data.email, password: data.password },
      process.env.TOKEN_SECRET
    );
  }
}

module.exports = Session;
