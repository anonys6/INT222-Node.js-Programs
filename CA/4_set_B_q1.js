const fs = require("fs");

const sPath = "CA\\files\\Copy.txt";
const dPath = "CA\\files\\Copy1.txt";

fs.open(sPath, "r", (err, fd) => {
    if (err) {
        return console.log("Error: " + err);
    }

    fs.readFile(fd, 'utf8', (err, data) => {
        if (err) {
            return console.log("Error: " + err);
        }

        fs.open(dPath, "w", (err, fd) => {
            if (err) {
                return console.log("Error opening file: " + err);
            }

            fs.copFile(fd, data, (err) => {
                if(err) {
                    return console.log("Error writing file: " + err);
                }

                console.log("File copied successfully.");
            })
        })
    })
})
