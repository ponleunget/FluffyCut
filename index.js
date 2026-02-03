const express = require('express');
const app = express();

//Database Connection
const db = require('./models/db');

//Setup EJS View Engine
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

//Route to Login Page
app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/', (req, res) => {
  res.send('Fluffy-Cut Server Running');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
