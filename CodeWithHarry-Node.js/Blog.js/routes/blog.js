const express = require("express");
const path = require("path");
const blogs = require("../data/blogs");

const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../template/index.html"));
})

module.exports = router;
