/*
Path module comes in handy while working with file and directory paths. It provides you with various methods to -
-> join path segments together
-> tell if path is absolute or not
-> get the last portion/segment of a path
-> get the file extension from a path etc.
*/

const path = require('path');

// C:\Users\ASUS\Desktop\NodeJSTut\app.js
const myPath = '/mnt/C/users/ASUS/Desktop/NodeJSTut/app.js';

const pathInfo = {
    fileName : path.basename(myPath),
    folderName : path.dirname(myPath),
    fileExtension : path.extname(myPath),
    absoluteOrNot : path.isAbsolute(myPath),
    detailInfo : path.parse(myPath),
};

console.log(pathInfo);

/*
We assign the path of some file to a variable.

basename() - returns the last part of that path

dirname() - returns the path to the parent directory of the last part of the path provided to it

extname() - returns the extension of the last part of the path
            returns '' if not exists

isAbsolute() - returns whether the path is absolute or not.
On UNIX based systems(Mac and Linux), absolute path starts with a forward slash (/). 
On windows, an absolute path starts with drive letter followed by colon and backslashes (C:\\).

parse() - returns an object containing a detailed breakdown of the path provided to it.
    root
    dir
    base
    ext
    name
*/

/*
path.sep - is a variable that contains the system specific path separator.
(
path.join(<paths>) - accepts path(s) as strings. It joins them using the system default seperator and returns the joined path.

path.resolve(<paths>) - works in similar way to path.join().
this function just joins the different paths provided to it using the system specific path separator and the final path is the absolute path to the present working directory.


*/