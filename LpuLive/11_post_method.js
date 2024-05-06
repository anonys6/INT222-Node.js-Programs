// Post Method:
const bodyParser = require('body-parser');
var express = require('express');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.get('/get', (req, res) => {
    res.sendFile(__dirname + "/" + "formdata.html")
})
app.get('/form', (req, res) => {
    res.sendFile(__dirname + "/" + "Formnew.html")
})
app.post('/submit', (req, res) => {
    response = {
        name: req.body.name,
        age: req.body.age
    }
    res.write('<table border="2" align =center>');
    res.write('<tr><th>Name</th><th>Age</th><tr>');
    res.write('<tr>');
    res.write('<td>' + req.body.name + '</td>');
    res.write('<td>' + req.body.age + '</td>');
    res.write('</tr>');
    res.write('</table>');
    res.end()
});

app.listen(2000);