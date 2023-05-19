// const hello = "jyoti";
// console.log(hello); 



// Blocking , Synhrnous way 
const fs = require('fs');

// const textIn = fs.readFileSync('./txt/input.txt' , 'utf-8');
// console.log(textIn);

// const textOut = `This is written by Jyoti Kumari : ${textIn}. \nCreated on ${Date.now()}`;

// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File Written !');


// Non-blocking , Asynchronous way
fs.readFile('./txt/start.txt' , 'utf-8' , (err , data1) =>{
    if(err) return console.log('ERROR! 💥');
    fs.readFile(`./txt/${data1}.txt` , 'utf-8' , (err , data2) =>{
        console.log(data2);
        fs.readFile(`./txt/append.txt` , 'utf-8' , (err , data3) =>{
            console.log(data3);

            fs.writeFile(`./txt/final.txt` ,`${data2} \n------ ${data3}` , 'utf-8' , (err) =>{
                console.log('------------------------Jyoti your data has been written in file 😃');
            })
        })
    });
});

console.log('Writting in file ......');