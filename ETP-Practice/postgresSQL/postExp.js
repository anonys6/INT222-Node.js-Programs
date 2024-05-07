// Import the express and pg modules
const express = require('express');
const { Pool } = require('pg');

// Create an express application
const app = express();

// Create a new pool of connections to the PostgreSQL database
const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "clay",
    database: "etp"
})

// Connect to the PostgreSQL database
pool.connect();

// Use the express.json middleware to parse JSON request bodies
app.use(express.json());

// Define a route handler for GET requests to the /users endpoint
app.get('/users', (req, res) => {
    // Query the database for all users
    pool.query('SELECT * FROM users', (err, result) => {
        if (!err) {
            // If the query was successful, send the result as the response
            res.json(result.rows);
        } else {
            // If the query failed, log the error
            console.log(err.message);
        }
    })
})

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server started on port 3000');
})