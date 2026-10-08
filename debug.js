//console.log and console.debug
//info level      debug-level
//always visible   hidden by most browser
//general purpose   highly detailed trouble shootng data
//logging

const user = {
    name:"Sanjana",
    role:"Student"
}
console.log("User info ",user);
const config = {
    env:"development",
    debug:true
}
console.log("Debugging config: ",config);

const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    console.log("Received request at /");
    console.debug("Requested headers: ",req.headers);
    res.send("Hello world");
});
app.listen(3002,()=>{
    console.log("Server is running at port 3002")
})