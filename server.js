var http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type' : 'text/plain'});
    res.end('hello EA');
}).listen(8085);
