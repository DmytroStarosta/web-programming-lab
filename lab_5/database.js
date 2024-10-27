const { createConnection } = require("mysql2");

const connection = createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
  password: "",
  database: "web_shop",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Successfully connected to the database");
});

module.exports = connection;
