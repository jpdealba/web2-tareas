const express = require("express");
const { getNews } = require("./newsManagement");
const { testNews } = require("./testData");
const router = express.Router();

//
router.get("/", (req, res) => {
  // var articles = await getNews();
  // res.render("index", {
  //   disabled: disabled,
  //   articles: articles,
  // });
  res.render("index", {
    articles: [],
  });
});

router.get(`/search`, async (req, res) => {
  // console.log(req.query.query);
  // res.render("new", {});
  var articles = await getNews(req.query.query);
  res.render("index", {
    articles: articles,
    searchTerm: req.query.query,
  });
});

//
module.exports = router;
