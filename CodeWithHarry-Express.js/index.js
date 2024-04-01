const express = require("express")
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.send("Hello world");
})

app.get("/about", (req, res) => {
    // res.send("In about");
    // res.sendFile(path.join(__dirname, "about.html"));
    // res.status(500);
    res.json({ "msalam": "Software Engineer" })
})

app.get("/contact", (req, res) => {
    res.send("In contact");
})

app.listen(port, () => {
    console.log(`Server is available at localhost:${3000}`);
});