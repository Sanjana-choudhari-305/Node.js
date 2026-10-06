const { log } = require('console');
const fs = require('fs');
const wstream = fs.createWriteStream('output.txt');
wstream.write('Helloooo, ');
wstream.write('world\n');
wstream.end('Likhna Hogaya'); //This will be in the output.txt

wstream.on('finish',()=>{
    console.log("Finished Writing");    //This will be in the terminal
});
wstream.on('error',(err)=>{
    console.log('Error: ',err);
});