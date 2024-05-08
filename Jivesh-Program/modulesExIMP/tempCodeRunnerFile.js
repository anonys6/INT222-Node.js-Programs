var fs = require('fs');
fs.chmod('Input1.txt', 0o775,
    function (err) {
        if (err) throw err;
        console.log('File Mode Changed');
    });