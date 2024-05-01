const url = require("url");

const myURL = new URL("https://www.myurl.com");
myURL.pathname = "/a/b/c";
myURL.search = "?d=e";
myURL.hash = "#fgh";

console.log(myURL);
console.log(myURL.href);


// const url = require('url');

// const myURL = new url.URL('/a/b/c?d=e#fgh', 'https://www.myurl.com');

// console.log(myURL);
// console.log(myURL.href);