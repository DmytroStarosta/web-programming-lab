const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./database');
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/trees', (req, res) => {
  const { material, color, priceMin, priceMax, search } = req.query;
  console.log("Query Params: ", req.query);

  let sql = 'SELECT * FROM christmas_trees WHERE 1=1';
  const params = [];

  if (search) {
    sql += ' AND name LIKE ?';
    params.push(`%${search}%`);
  }

  if (material) {
    sql += ' AND material = ?';
    params.push(material);
  }

  if (color) {
    sql += ' AND color = ?';
    params.push(color);
  }

  if (priceMin !== undefined) {
    sql += ' AND price >= ?';
    params.push(Number(priceMin));
  }

  if (priceMax !== undefined) {
    sql += ' AND price <= ?';
    params.push(Number(priceMax));
  }

  console.log("SQL Query: ", sql)
  console.log("SQL Parameters: ", params);

  db.query(sql, params, (error, results) => {
    if (error) {
      console.error('Error fetching data: ', error);
      return res.status(500).json({ error: 'Error fetching data' });
    }
    console.log("Fetched Data from DB: ", results);

    res.status(200).json(JSON.parse(JSON.stringify(results)));
  });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
