var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url)
    .then(client => {
        var dbo = client.db("faculty");
        var myObj = [
            { name: 'Mohan', course: 'INT222', ID: 27289 },
            { name: 'Ram', course: 'INT221', ID: 27222 },
            { name: 'Rahul', course: 'INT220', ID: 27223 }
        ];
        dbo.collection("faculty_details").insertMany(myObj)
            .then(result => {
                console.log("Number of documents inserted: "
                    + result.insertedCount);
                process.exit();
            })
            .catch(err => {
                console.error("An error occurred:", err);
            })
            .catch(err => {
                console.error("An error occurred:", err);
            })
    });