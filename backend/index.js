const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post('/business-data', (req, res) => {
  const { name, location } = req.body;
  res.json({
    rating: 4.3,
    reviews: 127,
    headline: `Why ${name} is ${location}'s Sweetest Spot in 2025`,
  });
});

const headlines = [
  "Discover the Hidden Gem in Your City!",
  "Top Spot for Delicious Delights!",
  "Your Go-To Place for Unmatched Quality!",
  "A New Experience Awaits You!",
  "Step into the World of Elegance!"
];

app.get('/regenerate-headline', (req, res) => {
  const { name, location } = req.query;
  const newHeadline = headlines[Math.floor(Math.random() * headlines.length)];
  res.json({ headline: newHeadline });
});