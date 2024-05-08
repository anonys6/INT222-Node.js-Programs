// const { MongoClient } = require("mongodb");

// const url = "mongodb://localhost:27017";
// const database = "practice";
// const client = new MongoClient(url);

// async function fetchData() {
//     let result = await client.connect();
//     let db = result.db(database);
//     let collection = db.collection("userdata");

//     let response = await collection.find({}).toArray();

//     console.log(response);
// }

// fetchData();

const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const database = "practice";
const client = new MongoClient(url);

async function fetchData() {
    const result = await client.connect();
    const db = result.db(database);
    const collection = db.collection("userdata");

    let response = await collection.find({}).toArray();

    console.log(response);
}

fetchData();