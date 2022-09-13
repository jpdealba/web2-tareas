const express = require("express");
const { getNews } = require("./newsManagement");
const router = express.Router();

//
router.get("/", async (req, res) => {
  if (req.query.type == "json") {
    var articles = await getNews(undefined);
    res.status(200).json(articles);
  } else {
    res.render("index", {
      articles: articles,
      searchTerm: [],
    });
  }
});

router.get(`/search`, async (req, res) => {
  var articles = await getNews(req.query.query);
  if (req.query.type == "json") {
    res.status(200).json(articles);
  } else {
    res.render("index", {
      articles: articles,
      searchTerm: req.query.query,
    });
  }
});

module.exports = router;
