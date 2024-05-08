const express = require("express");
const path = require("path");

const app = express();

app.get("/about", (req, res) => {
    res.send(`
        <input type="text" placeholder="Enter name" value=${req.query.name} />
    `);

})

app.get("/home", (req, res) => {
    // res.send("Home Page");
    res.send(`
        <h1>Welcome to Home Page</h1>
        <a href="/">Go to root page</a>
    `);
})

app.get("/", (req, res) => {
    res.send(`
        <h1>Root page</h1>
        <a href="/home">Go to home page</a>
    `);
})

app.get("/help", (req, res) => {
    res.sendFile(path.join(__dirname, "4_help.html"));
})

app.get("*", (req, res) => {
    res.send("Error 404, Page not found");
})


app.listen(5000, () => {
    console.log(`Server live at port http://localhost:5000`);
})