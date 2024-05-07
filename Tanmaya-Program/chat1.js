// const {socket} =require("socket.io");
var express=require('express');
var app=express();
const http=require("http");
var server=http.createServer(app);
var io=require("socket.io")(server);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/chat1.html");
})

users=[];

io.on("connection",(socket)=>{
    console.log("A user connected");
    socket.on("createUser",(data)=>{
        console.log(data);
        if(users.indexOf(data)>=0){
            socket.emit("userExists",data+"user already exists");

        }
        else{
            users.push(data);
            socket.emit("setUser",{username:data});
        }
    })


})


server.listen(3000,()=>{
    console.log("listening on localhost:3000");
})

