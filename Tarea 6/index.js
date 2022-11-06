const express = require("express");
require("dotenv").config();
const database = require("./database");
const bodyParser = require("body-parser");
const apiRoutes = require("./src/api");
const { tokenCheckHandler } = require("./middleware/middleware");
const app = express();

const port = process.env.PORT || 4000;
app.use(bodyParser.json());

app.use("/api/users", (req, res, next) => {
  tokenCheckHandler(req, res, next);
});

app.use("/api", apiRoutes);

app.get("", (req, res) => {
  res.send("api works!");
});

database
  .connect()
  .then((client) => {
    const db = client.db("memegenerator");
    database.db(db);

    app.listen(port, () => {
      console.log("app is running in port " + port);
    });
  })
  .catch((err) => {
    console.log(err);
    console.log("Failed to connect to database");
  });
