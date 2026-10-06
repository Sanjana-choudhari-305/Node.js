const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    const readablestream = fs.createReadStream('input1.txt');
    readablestream.pipe(res);

    readablestream.on('error',(err)=>{
        res.statusCode=500;
        res.end('Server error');
    });
}).listen(3000,()=>{
    console.log('Server is running');
});