const express = require('express');
const app = express();

app.get("/get", (req, res) => {
    res.sendFile(__dirname + "/" + "formData.html");
})

app.listen(2000);