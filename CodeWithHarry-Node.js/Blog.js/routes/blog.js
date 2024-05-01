const express = require("express");
const path = require("path");
const blogs = require("../data/blogs");

const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../templates/index.html"));
})

router.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, "../templates/bloghome.html"))
})

router.get('/blogpost/:slug', (req, res) => {
    myBlog = blogs.filter((e) => {
        return req.params.slug;
    })
    console.log(myBlog)
})

module.exports = router;
