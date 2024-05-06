var express = require('express');
var app = express();

app.get('/get', (req, res) => {
    res.sendFile(__dirname + "/" + "formdata.html")
})
app.get('/form', (req, res) => {
    res.sendFile(__dirname + "/" + "Formnew.html")
})
app.get('/submit', (req, res) => {
    response = {
        name: req.query.name,
        age: req.query.age
    }
    res.write('<table border="2" align =center>');
    res.write('<tr><th>Name</th><th>Age</th><tr>');
    res.write('<tr>');
    res.write('<td>' + req.query.name + '</td>');
    res.write('<td>' + req.query.age + '</td>');
    res.write('</tr>');
    res.write('</table>');
    res.end()
});

app.listen(2000);