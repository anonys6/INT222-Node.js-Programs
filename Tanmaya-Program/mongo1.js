const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

async function run() {
  try {
    const client = await MongoClient.connect(url);
    console.log('Connected to MongoDB');
    const db = client.db('newdb'); // replace 'test' with your database name

    // perform operations on the database here
    var obj=[{
        name:"John",
        age:30,
        city:"New York"
    }, {
        name:"Amy",
        age:25,
        city:"San Francisco"
    }, {
        name:"Peter",
        age:35,
        city:"Los Angeles"
    }]

    // await db.collection("myCollection").insertMany(obj);
    // await db.createCollection('myCollection'); // replace 'myCollection' with your collection name
    // console.log('Collection created');

    // const find=await db.collection("myCollection").find({}).toArray();
    // console.log(find);

    // await db.collection("myCollection").deleteMany({name:"John"});
    
    // const sort=await db.collection("myCollection").find({}).sort({age:1}).toArray();
    // console.log(sort);

    await db.collection("myCollection").updateOne({name:"Amy"},{$set:{age:80}});
    const find=await db.collection("myCollection").find({}).toArray();
    console.log(find);
    

    client.close();
  } catch (err) {
    console.error('Failed to connect to MongoDB or create collection. Error:', err);
  }
}

run();