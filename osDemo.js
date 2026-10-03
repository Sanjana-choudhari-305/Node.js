const os = require('os');

console.log("CPU architecture: "+os.arch());
console.log("Free memory: "+os.freemem());
console.log(":"+os.freemem());
console.log(":"+os.networkInterfaces());
console.log(":"+os.totalmem());