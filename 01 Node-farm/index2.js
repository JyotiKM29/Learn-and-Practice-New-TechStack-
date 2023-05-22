const http = require('http')
const url = require('url')


/////////////////////SERVER
//1.create server 
//2.start server

const server = http.createServer((req , res) =>{
    // console.log(req);
    // console.log(req.url);
    // res.end('hello from the server !')

    const pathName = req.url;

    if(pathName === '/' || pathName === '/overview'){
        res.end('This is OVERVIEW PAGE');
    }else if(pathName === '/product'){
        res.end('This is PRODUCT PAGE');
    }else{
        res.end('PAGE IS NOT FOUND')
    }
})

server.listen(8000 , '127.0.0.1', () => {
    console.log('listening to Jyoti Request.....');
})