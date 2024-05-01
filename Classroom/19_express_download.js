const express = require("express");

var app = express();

app.get("/", (req, res) => {
    res.download("file.txt", (err) => {
        if(err) {
            console.log("Error in downloading the file");
        } else {
            res.send("File downloaded successfully");
        }
    })
})

app.listen(2000);