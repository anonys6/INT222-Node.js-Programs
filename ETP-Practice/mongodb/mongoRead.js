const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017/practice";

const client = new MongoClient(uri);

client.connect(err => {
    if (err) {
        console.log("Failed to connect to DB");
        return;
    } else {
        console.log("Connected successfully to the DB");
    }
})