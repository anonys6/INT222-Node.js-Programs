const bodyParser = require('body-parser');
const express = require('express');
const cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
const app = express();
app.use(cookieSession({
    name:"session",
    keys:["key1","key2"]
}))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(function(req,res,next){
    req.sessionOptions.maxAge=5000
    next();
})
const hello=(req,res,next)=>{
    console.log("Hello");
    next();

}
// app.get("/submit",(req,res)=>{
//     res.sendFile(__dirname+"/form.html");

// })
// app.post("/submit",(req,res)=>{
//     res.send("Your form has been submitted successfully");
//     console.log(req.body.name);
//     console.log(req.body.age);
// })

app.get("/",hello,(req,res)=>{
    if(req.session.views){
        req.session.views++;
        res.send("You visited this page "+req.session.views+" times");
    }
    else{
        req.session.views=1;
        res.send("Welcome to this page for the first time");
    }
    // res.cookie("name","express").send("cookie set");
    // console.log(req.cookies);
})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})