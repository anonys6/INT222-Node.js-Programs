const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

app.get("/profile", (req, res) => {
    const user = {
        name: "luv",
        email: "luv@test.com",
        city: "UK",
        skills: ["cpp", "python", "aws"]
    }
    res.render("profile.ejs", { user });
})

app.get("*", (req, res) => {
    res.send("404, Page not found");
})

app.listen(5000, () => {
    console.log(`Server running at: http://localhost:5000`);
})