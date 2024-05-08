/*
Components of request-response - 
1. status line - 
This is the first line of the request or response. It contains information about the message, such as the method used, URL, protocol version etc.

2. header - 
This is a collection of key-value pairs separated by colon. The headers include additional information about the message such as the content type, content length, caching info and so on.

3. body - 
Contains the actual data being sent or received. In case of requests, it might contain form data or query parameters. In the case of reponses, it could contain be HTML, JSON, XML or any other data format. 
*/

/*
HTTP methods - 
1. GET - retrieves a resource from the server
2. POST - inserts a resource in the server
3. PUT - updates an existing resource in the server
4. DELETE - deletes a resource from the server
*/

/*
Status codes - 
HTTP status codes are 3 digit numbers that indicate the status of a HTTP request made to a server.

200 - OK - request has succeeded & server has returned the requested data.

201 - Created - request has been fulfilled & new resource has been created

204 - No content - Server has successfully processed the request but there is no data in return.

400 - Bad request - Server couldnt understand the request (ex - missing parameters)

401 - Unauthorized - Server requires authentication before it can respond

403 - Forbidden - Server understands the request but the client does not have the persmission for access

404 - Not Found - Server couldnt find the requested resource

500 - Internal Server Error - Server encountered an error while processing the request

503 - Service Unavailable - The server is currently unable to handle the request due to maintenance or overload.
*/

const http = require('http');

/*
http.createServer(req, res);

req - stores the incoming request obj
res - Response sent by server.This callback func gets executed everytime someone hits the server

res.send() is a  function attached to res object with which we can send some data back to the client.

listen() method is used to start the server that listens for incoming requests. Takes port number as arg and binds the server to that port number.
    Takes 2 args - port number and callback func
*/

// const server = http.createServer((req, res) => {
//     if(req.url === '/'){
//         res.end('This is my Home Page');
//     } else if(req.url === '/about'){
//         res.end('This is my About Page');
//     } else if(req.url === '/contact'){
//         res.end('This is my Contact Page');
//     } else {
//         res.end('404, Resource Not Found');
//     }
// })

/*
Better way of sending back a response in which we can add 2 or more methods with res.end()
1. res.writeHead() - This method is usedd to send response headers to the client. Status code and headers like content-type

2. res.write() - Used to send response body to the client

3. res.end() - used to end the response process.
*/

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>Home Page</h1>');
        res.end();
    } else if(req.url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>About Page</h1>');
        res.end();
    } else if(req.url === '/contact'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>Contact Page</h1>');
        res.end();
    } else {
        res.writeHead(404, {'content-type': 'text/html'});
        res.write('<h1>404, Resource Not Found <a href="/">Go Back Home</a></h1>');
        res.end();
    }
})

server.listen(5000, ()=>{
    console.log('Server listening at port 5000.');
})