const express = require('express')
const app = express();
const port = 8099;

app.get('/search',(req,res)=>{
    const query = req.query.q;
    res.send(`<h1>Search result for: ${query}</h1`);
});

app.listen(port,()=>{
    console.log("Server started");
});

//This code shows vulnerability

//for output: http://localhost:8099/search?q=Good Evening
//http://localhost:8099/search?q=<script>alert('Hello World')</script>