const express = require("express");
const rutasNoticias = require("./news/routes");
const { engine } = require("express-handlebars");

// Inicializar app
const app = express();
const path = require("path");

//registrar engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.use("/assets", express.static(path.join(__dirname, "public")));

const middleWare = (req, res, next) => {
  next();
};

app.get("/", (req, res) => {
  res.redirect("/news");
});

app.listen(3000, () => {
  console.log("app is running in port 3000");
});

app.use("/news", middleWare, rutasNoticias);
