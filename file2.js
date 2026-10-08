const express = require('express');
const app = express();

//route
app.get('/',(req,res,next)=>{
    try{
        throw new Error('Something went wrong');
    }catch(err){
        next(err);
    }
});

//error handling middleware
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).send('Internal server error');
});

app.listen(3000, () => {
    console.log("server is running");
});