const express = require('express');
const logger = require('./winstonLogger');
const app = express();
const port = 5055;
app.get('/',(req,res)=>{
    logger.debug('Starting Authentication process');
    logger.info('Home route Accessed');
    res.send('Welcome to winston logging example');
});

app.get('/error',(req,res)=>{
    try{
        throw new Error("Something went wrong");
    }catch(err){
        logger.error(`Error occured: ${err.message}`);
        res.status(500).send('Internal Server Error')
    }
});

app.listen(port,()=>{
    logger.info(`Server started at ${port}`)
});