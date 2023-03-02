const http = require('http');
const host = '127.0.01';
const port = 8083;

const routes = {
    '/': (request, response)=>{
        response.writeHead(200);
        response.end("PROBANDO QUERY STRING....")
    }
};

const server = http.createServer((request, response) => {
    let miURL = new URL('http.//${host}:${request.ur.}');
    console.log(miURL)

    if (request.url in routes) {
        return routes [request.url](request, response);


    }

    response.writeHead(404);
    response.end(http.STATUS_CODES[404]);
})
    




