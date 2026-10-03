const path = require('path');
const dirName = path.dirname('D:\EdgeVerve\Node.js\demopgm.js');
console.log("Directory Name: ",dirName);

const baseName = path.basename('D:\EdgeVerve\Node.js\demopgm.js');
console.log('Filename: ',baseName);

const extName = path.extname('D:\EdgeVerve\Node.js\demopgm.js');
console.log('Extension: ',extName);