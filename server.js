const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

const transactions = require('./routes');

const app = express();

const port = 3005;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Transactions API');
});

app.get('/transactions/:count', (req, res) => {
  res.json(transactions.generateData(req.params.count));
})

app.listen(port, () => console.log(`Transactions Api is listening on port ${port}`));