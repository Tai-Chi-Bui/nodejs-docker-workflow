import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`Welcome to Tai's server!`);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
