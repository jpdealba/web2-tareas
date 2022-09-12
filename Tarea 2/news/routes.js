const express = require("express");
const { getNews } = require("./newsManagement");
const router = express.Router();

//
router.get("/", async (req, res) => {
  var disabled = false;
  var articles = await getNews();

  res.render("index", {
    disabled: disabled,
    articles: articles,
  });
});
//
module.exports = router;
