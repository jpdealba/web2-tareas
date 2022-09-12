const { default: axios } = require("axios");
const moment = require("moment");
const { testNews } = require("./testData");
const API_KEY = "afe6aac5fd2542cd805b2f2b964edd9e";

const getNews = async () => {
  try {
    const date = moment().subtract(1, "months").format("YYYY-MM-DD");
    const query = "tesla";
    const URL = `https://newsapi.org/v2/everything?q=${query}&from=${date}&sortBy=publishedAt&apiKey=${API_KEY}`;
    // const res = await axios.get(URL);
    // console.log(res.data);

    return testNews.articles;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const openModal = () => {};

module.exports = { getNews };
