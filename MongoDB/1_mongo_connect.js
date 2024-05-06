require('dotenv').config();

const express = require("express");
const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGO_URI
const app = express();
const PORT = process.env.PORT || 3000;

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
        console.log("Connected to MongoDB server!");

        const db = client.db('test1');

        // Insert a document into the 'test' collection
        db.collection('test').insertOne({ name: 'test' }, (err, result) => {
            if (err) {
                console.error('Failed to insert document', err);
                return;
            }

            console.log('Document inserted, database should be created now');

            app.listen(PORT, () => {
                console.log(`Server is running on port ${ PORT }`);
            });
        });
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });