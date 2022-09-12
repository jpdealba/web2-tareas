const { default: axios } = require("axios");
const moment = require("moment");
const API_KEY = "afe6aac5fd2542cd805b2f2b964edd9e";

const testNews = {
  status: "ok",
  totalResults: 6361,
  articles: [
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author:
        "David Marino-Nachison, Matt Grossman, Vicky Ge Huang, Caitlin Ostroff, Akane Otani, Gunjan Banerji, Eric Wallerstein, Will Horner",
      title:
        "Stock Market News Today: Dow Up About 150 Points Ahead of CPI Report - The Wall Street Journal",
      description: "Follow The Wall Street Journal’s full markets coverage.",
      url: "https://www.wsj.com/livecoverage/stock-market-news-today-09-12-2022",
      urlToImage: "https://images.wsj.net/im-589547/social",
      publishedAt: "2022-09-12T16:35:00Z",
      content: null,
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author:
        "David Marino-Nachison, Matt Grossman, Vicky Ge Huang, Caitlin Ostroff, Akane Otani, Gunjan Banerji, Eric Wallerstein, Will Horner",
      title:
        "Stock Market News Today: Dow Up About 150 Points Ahead of CPI Report - The Wall Street Journal",
      description: "Follow The Wall Street Journal’s full markets coverage.",
      url: "https://www.wsj.com/livecoverage/stock-market-news-today-09-12-2022",
      urlToImage: "https://images.wsj.net/im-589547/social",
      publishedAt: "2022-09-12T16:35:00Z",
      content: null,
    },
  ],
};

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

module.exports = { getNews };
