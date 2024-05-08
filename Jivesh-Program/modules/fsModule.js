/*
For file handling
-> Reading/Writing a file (Sync or async)
-> Deleting
-> Reading the contents of the director
-> Renaming a file
-> Watching for changes in a file
*/


const fs = require('fs');

/*
fs.mkdir() - 

Used to create a new directory.
Takes 2 args - 
1. path
2. optional callback func - purpose of the callback function is to notify that the directory creation is successfull.
Necessary because the mkdir() function is async meaning that it does not block the execution of the rest of the code while the operation is in progress. 
    Instead, it immediately returns control to the callback func allowing it to continue executing other tasks. 

    Once the directory has been created, the callback function is called with an error object(if any) and any other relevant data related to the operation.
*/

fs.mkdir('./myFolder', (err) => {
    if(err){
        console.log(err);
    } else {
        console.log('Folder createad successfully.');
    }
})

/*
Writing into files - 
1. Synchronous approach - 
We create a file and write the data to it in a blocking manner which means that NodeJS waits for the creation and write operation to complete before moving on. 
    If an error occurs, it throws an exception that must be caught using try...catch

2. Async approach - 
We create and write data to file in a non-blocking method.
NodeJS does not wait for the write operation to complete before moving on. Instead it takes a callback function that gets called once the entire process is completed. 
*/

/*
writefile() takes three args - 
-> path
-> data
-> optional callback func

If file exists - It will erase and write fresh content.
Otherwise it will create the file.

Adding a parameter - 

    {flag: 'a'} will cause the behaviour to be appending. 
*/

const data = 'Hello World. I wrote this async.';
fs.writeFile('./myfolder/async.txt', data, 'a', (err)=> {
    if(err){
        console.log(err);
        return;
    } else {
        console.log('Write operation successful.');
    }
})

/*
Async - 

readFile() -
takes 3 args - 
-> path
-> encoding
-> call func - 
    accepts 2 parameters - 1st param stores the file data
                           2nd param stores the error obj
*/

fs.readFile('./SampleFolder/async.txt', (err,data)=> {
    if(err){
        console.log(err);
        return;
    } else {
        console.log('Read operation successful.');
        console.log(data.toString());
    }
})


/*
Sync method - need to wrap in try...catch block for error handling
*/

const data2 = 'Hello World. Hi from sync.';

try {
    //Write
    fs.writeFileSync('./myFolder/sync.txt', data2);
    console.log('Write operation successful.');

    //Read
    const fd = fs.readFileSync('./myFolder/sync.txt', 'utf-8');
    console.log('Read operation successful. The data - \n');
    console.log(fd);
} catch (err) {
    console.log(err);
}


/*
readdir() - accepts 2 parameters
-> path
-> callback func
    -takes 2 param :
        1. error obj
        2. array of files
*/

fs.readdir('./myFolder', (err, files) => {
    if(err){
        console.log(err);
        return;
    } else {
        console.log('Directory read successful. Here are the contents - \n');
        console.log(files);
    }
})

/*
renaming a file - fs.rename()
takes 2 args - current file path and new file path
             - callback func
*/

let oldPath = './myFolder';
let newPath = './SampleFolder';

fs.rename(oldPath, newPath, (err)=> {
    if(err){
        console.log(err);
        return;
    } else {
        console.log('Rename done.');
    }
})

/*
fs.open() - creating file with w mode
*/

fs.open('./SampleFolder/sample.txt', 'w', (err)=> {
    if(err){
        console.log(err);
        return;
    } else{
        console.log('saved');
    }
});

/*
Deleting file - fs.unlink()
*/

fs.unlink('./Samplefolder/sample.txt', (err)=> {
    if(err){
        console.log(err);
        return;
    } else {
        console.log('Deleted successfully!');
    }
})