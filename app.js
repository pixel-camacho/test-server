const http = require('http');

http.createServer((req,res) =>{
    res.writeHead(200,{'Content-Type': 'application/json'});

    let out = {
        name: 'Dallan',
        age: 26,
        url: req.url
    }
    res.write(JSON.stringify(out));
    res.end();
}).listen(8080);

console.log('Escuchando en puerto 8080');