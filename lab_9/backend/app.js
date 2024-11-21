const express = require('express');
const cors = require('cors');
const db = require('./database');
const app = express();

app.use(express.json());
app.use(cors());



app.get('/trees', (req, res) => {
  const sql = 'SELECT * FROM christmas_trees';
  db.query(sql, (error, results) => {
  if (error) {
    return res.status(500).json({ error: 'Error get data' });
  }
    res.status(200).json(results);
  });
});
