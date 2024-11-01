const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./database');
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// POST request
app.post('/trees', (req, res) => {
  const { name, manufacturer, material, description, price } = req.body;
  const sql = 'INSERT INTO christmas_tree (name, manufacturer, material, description, price) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [name, manufacturer, material, description, price], (error, result) => {
    if (error) {
      return res.status(500).json({ error: 'Error inserting data' });
    }
    res.status(201).json({ message: 'Tree added', id: result.insertId });
  });
});

//GET request
app.get('/trees', (req, res) => {
  const sql = 'SELECT * FROM christmas_tree';
  db.query(sql, (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Error fetching data' });
    }
    res.status(200).json(results);
  });
});

//PUT request
app.put('/trees/:id', (req, res) => {
  const { id } = req.params;
  const { name, manufacturer, material, description, price } = req.body;
  const sql = 'UPDATE christmas_tree SET name = ?, manufacturer = ?, material = ?, description = ?, price = ? WHERE id = ?';
  db.query(sql, [name, manufacturer, material, description, price, id], (error, result) => {
    if (error) {
      return res.status(500).json({ error: 'Error updating data' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Tree not found' });
    }
    res.status(200).json({ message: 'Tree updated' });
  });
});

//DELETE request
app.delete('/trees/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM christmas_tree WHERE id = ?';
  db.query(sql, [id], (error, result) => {
    if (error) {
      return res.status(500).json({ error: 'Error deleting data' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Tree not found' });
    }
    res.status(200).json({ message: 'Tree deleted' });
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})