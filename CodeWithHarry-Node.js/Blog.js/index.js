const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "static")));
app.use("/", require(path.join(__dirname, "routes/blog.js")))

app.listen(port, () => {
    console.log(`URL: http://localhost:${port}`);
})

// app.use("/",)