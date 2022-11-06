const jwt = require("jsonwebtoken");

const tokenCheckHandler = (req, res, next) => {
  // if (req.method == "POST") {
  //   next();
  // }
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    next();
  });
};

module.exports = {
  tokenCheckHandler,
};