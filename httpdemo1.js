const http = require('http')
const server = http.createServer((req,res)=>{
    res.write("Welcome to nodejs, we are learning nodejs");
    res.end();
});

server.listen(3000,()=>{
    console.log("Server running on port 3000");
})