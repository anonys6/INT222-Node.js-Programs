const express = require("express");
const path = require("path");

const app = express()

const middleWare = (req, res, next) => {
    if (!req.query.age) {
        res.send("Please provide age");
    } else if (req.query.age < 18) {
        res.send("You can not access the page");
    } else {
        next();
    }
}

app.use(middleWare);

app.get("/", (req, res) => {
    res.send("Root page");
})

app.get("/home", (req, res) => {
    res.send("Home page");
})

app.get("/about", (req, res) => {
    res.send("About page");
})

app.listen(5000, () => {
    console.log(`Server running at: http://localhost:5000`);
})
