const { default: axios } = require("axios");
const moment = require("moment");
const { testNews } = require("./testData");
const API_KEY = "afe6aac5fd2542cd805b2f2b964edd9e";

const getNews = async (query) => {
  try {
    const date = moment().subtract(1, "months").format("YYYY-MM-DD");
    // const query = "tesla";
    const URL = `https://newsapi.org/v2/everything?q=${query}&from=${date}&sortBy=publishedAt&apiKey=${API_KEY}`;
    const res = await axios.get(URL);
    // console.log(res.data.articles);
    return testNews.articles;
    // return res.data.articles;
  } catch (err) {
    console.log(err);
    return null;
  }
};

module.exports = { getNews };
