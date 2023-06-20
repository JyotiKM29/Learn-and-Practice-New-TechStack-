// Server
const fs = require('fs')
const http = require('http')
const url = require('url')


const server = http.createServer((req ,res) => {
    const pathName = req.url;
    
    if(pathName === '/' || pathName === '/overview'){
        res.end('This is OVERVIEW');
    }
    else if(pathName === '/product'){
        res.end('This is PRODUCT');   

    }else if( pathName === '/api'){
        fs.readFile('./dev-data/data.json', 'utf-8',(err , data)=>{
           const productData = JSON.parse(data);
        // console.log(productData);
        res.writeHead(200 ,{
            'Context-type' : 'appliction/json'
        });
        res.end(data);
        
        });
        // res.end('API Call')
    }
    else{
        res.writeHead('404',{
            //this piece of information your are sending to
            'Content-type' : 'text/html',
            'my-own-header' : 'hello-world',

        });  //this is Error Shown in Network tab also
        res.end("<h1>Page is not found</h1>");
    }
    // res.end("Hello From Jyoti to the Server :");

});

server.listen(8000,'127.0.0.1',() =>{
    console.log('listining to request to the server');
})

