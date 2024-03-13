const fs = require("fs");

let data = fs.readFileSync("CA\\files\\1_set_A_q1.txt");

if (data.toString() === "") {
    console.log("FIle is empty");
} else {
    console.log("Synchronous read: " + data.toString());
}

