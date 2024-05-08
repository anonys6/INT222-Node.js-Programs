const { log } = require("console");
const express = require("express")
const path = require("path")

const app = express()

app.use(express.static(path.join(__dirname, "5_public")));

app.listen(5000, () => {
    console.log(`Server running at: http://localhost:5000`);
})