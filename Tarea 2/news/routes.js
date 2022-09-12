const express = require("express");
const { getNews } = require("./newsManagement");
const router = express.Router();

//
router.get("/", async (req, res) => {
  // console.log(getNews());
  var disabled = false;
  var articles = await getNews();
  // res.send("endpoint de noticias");

  res.render("index", {
    title: "Prueba desde routes.js",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    disabled: disabled,
    articles: articles,
  });
});
//
module.exports = router;
