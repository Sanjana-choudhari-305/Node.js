const fs = require('fs');
fs.writeFileSync('sample.txt','NodeJs is a runtime environment using js that runs on server side');
console.log('File Created');

const data=fs.readFileSync('sample.txt','utf8');
console.log(data);

//Appending - Sync 
fs.appendFileSync('sample.txt','NodeJS has modules: HTTP, FS, OS, URL, UTIL');
console.log('Data Appended');

//For Async we have to use callbacks
fs.appendFile('sample.txt','\n Trying with Async append',(err)=>{
    if(err){
        console.log('Error appending data: ',err);
        return;
    }
    console.log('Data appended');
})

//Unlinking - we using async await bcz we have async append, thus without this we would get error
/* async function deletefile(){
    try{
        await fs.unlink('sample.txt');
    }catch(error){
        console.error('Error removing file ',error);
    }
}
 */ //Dk why but this didn't work

 //Dk why but this worked
fs.unlink('sample.txt',(err)=>{
    if(err){
        console.log('Error in deleting File');
        return;
    }
    console.log("File deleted Successfully");
})