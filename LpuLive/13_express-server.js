var express = require('express');
const { hello, welcome } = require("./middle");

var app = express();

app.use(hello);
app.get("/", hello, welcome, (req, res) => {
    res.send('Printing: hello' + '<br/>' + 'Printing: welcome')
});

app.listen(3000, function (err) {
    if (err) console.log(err);
    console.log("Server started");
})