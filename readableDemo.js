const fs = require('fs');
const readablestream = fs.createReadStream('input1.txt',{
    encoding:'utf-8', highWaterMark:16
});

readablestream.on('data',(chunk)=>{
    console.log('Received chunk: ',chunk);
});

readablestream.on('end',()=>{
    console.log('Finished Reading');
});

readablestream.on('error',(err)=>{
    console.log('Error: ',err);
});