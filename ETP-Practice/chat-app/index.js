const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
    socket.on("user-message", message => {
        io.emit("message", message);
    })
})



app.get("/", (req, res) => {
    return res.sendFile(path.join(__dirname, "index.html"));
})

server.listen(5000, () => {
    console.log(`Server live at: http://localhost:5000`);
})