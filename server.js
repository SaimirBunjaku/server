const express = require("express");
const axios = require("axios");
const app = express();

const PORT = 5000;

app.get("/api", async (req, res) => {
  try {
    const itemsPerPage = 9;
    const currentPage = 1;

    const apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${itemsPerPage}&page=${currentPage}&sparkline=false`;

    const response = await axios.get(apiUrl);

    const coinData = response.data;

    res.json({ coinData });
  } catch (error) {
    console.error("Error fetching data from CoinGecko API:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
