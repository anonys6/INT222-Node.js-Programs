var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/Univ";

MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});



const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/Univ";

MongoClient.connect(url, { useUnifiedTopology: true })
    .then(db => {
        console.log("Database created!");
        db.close();
    })
    .catch(err => {
        throw err;
    });



var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/Univ";
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("Univ");
    dbo.createCollection("Student_data", function (err, res) {
        if (err) throw err;
        console.log("Collection created");
        db.close();
    });
});



var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/Univ";
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("Univ");
    var myobj = [
        { name: 'Manoj', course: 'Node js', marks: 98, Grade: 'O', Mode: 'Regular' },
        { name: 'Anu', course: 'React js', marks: 98 },
        { name: 'Ram', course: 'HTML', marks: 98 },
        { name: 'Tej', course: 'Angular js', marks: 98 },
        { name: 'Manoj', course: 'Node js', marks: 98, Grade: 'O', Mode: 'Regular' },
    ];
    dbo.collection("Student_data").insertMany(myobj, function (err, data) {
        if (err) throw err;
        console.log("Number of documents inserted: " + data.insertedCount);
        db.close();
    });
});



var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url)
    .then(client => {
        var dbo = client.db("faculty");
        var myobj = [
            { name: 'Mohan', course: 'INT222', ID: 27289 },
            { name: 'Ram', course: 'INT221', ID: 27222 },
            { name: 'Rahul', course: 'INT220', ID: 27223 }
        ];
        dbo.collection("faculty_details").insertMany(myobj)
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



    