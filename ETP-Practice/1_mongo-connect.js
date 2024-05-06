const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017"
const database = 'practice';
const client = new MongoClient(url);

async function fetchData() {
    await client.connect();
    const dbo = client.db(database);
    const collection = dbo.collection('userdata');
    const response = await collection.find({}).toArray();
    console.log(response);

}

fetchData();