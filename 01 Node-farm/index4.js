const fs = require("fs");
const http = require("http");
const url = require("url");

// /////////////////////////////////////////////////
//Server
const replaceTemplate = (temp , product) => {
    let output = temp.replace(/{%PRODUCTNAME%}/g , product.productName);
    output = output.replace(/{%IMAGE%}/g , product.image);
    output = output.replace(/{%PRICE%}/g , product.price);
    output = output.replace(/{%FROM%}/g , product.from);
    output = output.replace(/{%NUTRIENTS%}/g , product.nutrients);
    output = output.replace(/{%QUANTITY%}/g , product.quantity);
    output = output.replace(/{%DESCRIPTION%}/g , product.description);
    output = output.replace(/{%ID%}/g , product.id);
    if(!product.organic)
    output = output.replace(/{%NOT_ORGANIC%}/g , 'non-organic');
    return output;
}

const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html` , "utf-8");
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html` , "utf-8");
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html` , "utf-8");

const data = fs.readFileSync("./dev-data/data.json", "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

//    Overview Page
  if (pathName === "/" || pathName === "/overview") {
    const cardsHtml = dataObj.map(el => replaceTemplate(tempCard ,el)).join('');
    const output = tempOverview.replace('{%PRODUCT_CARDS%}' , cardsHtml)
    // console.log(cardsHtml);
    res.end(output); 
  } 
//   Product
  else if (pathName === "/product") {
    res.end("This is PRODUCT");
  } 
//   Api
  else if (pathName === "/api") {
    res.writeHead(200, {
      "Context-type": "appliction/json",
    });
    res.end(data);

    // res.end('API Call')
  }
//   404 page
   else {
    res.writeHead(404, {
      //this piece of information your are sending to
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    }); //this is Error Shown in Network tab also
    res.end("<h1>Page is not found</h1>");
  }
  // res.end("Hello From Jyoti to the Server :");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listining to request to the server");
});
