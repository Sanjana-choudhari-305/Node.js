const express = require('express');
const app = express();
const port=9000;
function escapehtml(unsafe){
    return unsafe
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039");
}

app.get('/search',(req,res)=>{
    const rawQuery = req.query.q || '';
    const safeQuery = escapehtml(rawQuery);
    res.send(`<h1>Search result for: ${safeQuery}</h1><h5>Nice try bruh</h5>`)
});

app.listen(port,()=>{
    console.log("Server started");
});