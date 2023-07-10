const http = require('http');
const fs = require('fs');


const PORT = 2000;
const hostname = 'localhost';

const home = fs.readFileSync('./index.html');

const server = http.createServer((req, res) => {
   

    if(req.url === '/'){
        return res.end(home);
    }
    else{
        return res.end('<h1>Page is NOT found</h1>');
    }
})

server.listen(PORT, hostname , ()=>{
    console.log('Server is Working');
})
