// index.js: 
const express = require('express');
const sequelize = require('./sequelize');
const Todo = require('./models/Todo');
const app = express();
const PORT = 3000;
// Test the database connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        // Synchronize defined models with the database
        return sequelize.sync({ alter: true });
    })
    .then(() => {
        console.log('All models were synchronized successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });
app.use(express.json());
// Define endpoints
app.get('/todos', (req, res) => {
    Todo.findAll()
        .then((todos) => {
            res.json(todos);
        })
        .catch((error) => {
            res.status(500).json({ error: 'Internal server error' });
        });
});
app.post('/todos', (req, res) => {
    const { title, completed } = req.body;
    Todo.create({ title, completed })
        .then((todo) => {
            res.status(201).json(todo);
        })
        .catch((error) => {
            res.status(400).json({ error: 'Bad request' });
        });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});