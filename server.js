const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',  // change to your MySQL username
    password: '',  // change to your MySQL password
    database: 'StoryDB'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database!');
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route for user login
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.query(query, [email, password], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    });
});

// Route to submit a story
app.post('/submit-story', (req, res) => {
    const { name, story } = req.body;

    const query = 'INSERT INTO stories (name, story) VALUES (?, ?)';
    db.query(query, [name, story], (err, results) => {
        if (err) throw err;
        res.json({ message: 'Story submitted successfully' });
    });
});

// Route to get all stories
app.get('/get-stories', (req, res) => {
    const query = 'SELECT * FROM stories ORDER BY created_at DESC';
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
