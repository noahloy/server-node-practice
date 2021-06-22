const http = require("http");
const port = 3000;
const host = "127.0.0.1";

const server = http.createServer((resquest, response) => { //existence of the server
    console.log(request.url);


const { method, url } = request;

switch (method) {
    case 'GET':
        response.end("Way to GET!");
    case 'POST':
        response.end("POST was your request method!");
    default:
    response.end("This isn't your grandma's API");
}
});


server.listen(port, host, () => { //when the server does something
    console.log('Server is listening at ${port} on ${host} !');
})