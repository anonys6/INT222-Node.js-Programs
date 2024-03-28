const express = require('express');
const app = express();

app.get("/get", (req, res) => {
    res.sendFile(__dirname + "/" + "18_formData.html");
})

app.get("/submit", (req, res) => {
    const name = req.query.name;
    const age = req.query.age;
    console.log(`Name: ${name}, Age: ${age}`);
    res.send(`Received the data. Name: ${name}, Age: ${age}`);
});

app.listen(2000, () => {
    console.log("Server is running on port 2000");
});

// const express = require('express');
// const app = express();

// app.get("/", (req, res) => {
//     res.send("Welcome to the home page!");
// });

// app.get("/get", (req, res) => {
//     res.sendFile(__dirname + "/" + "18_formData.html");
// })

// app.get("/submit", (req, res) => {
//     const name = req.query.name;
//     const age = req.query.age;
//     console.log(`Name: ${name}, Age: ${age}`);
//     res.send(`Received the data. Name: ${name}, Age: ${age}`);
// });

// app.listen(2000, () => {
//     console.log("Server is running on port 2000");
// });