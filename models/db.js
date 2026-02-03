const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'fluffycut_db'
});

db.connect((err) => {
  if (err) {
    console.log('Database connection failed ❌');
  } else {
    console.log('MySQL connected ✅');
  }
});

module.exports = db;
