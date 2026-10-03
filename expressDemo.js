const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send("Welcome to Express js Session");
});

app.listen(3000,()=>{
    console.log('server is running on http://localhost:3000')
})