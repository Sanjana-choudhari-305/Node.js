const querystring = require('querystring');
const obj = querystring.parse('name=Sanjana&city=Gadag');
console.log(obj.name);
console.log(obj.city);