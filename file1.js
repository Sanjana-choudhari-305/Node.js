const fs = require('fs/promises')
async function readFilecontent() {
    try{
        const data = await fs.readFile('nonexistence.txt','utf-8');
        console.log(data);
    }catch(err){
        console.log('Error reading file',err);
    }
}
readFilecontent();