import express from 'express';

const app = express();
const port = 3006;

// custom middleware
function logger(req, res, next) {
    console.log(
        `${req.method} ${req.url} at ${new Date().toISOString()}`
    );

    next();
}
// Middle ware 2
app.use((req,res,next)=>{
    console.log("Middle ware 1");
    next();
});
app.use((req,res,next)=>{
    console.log("Middle ware 2");
    next();
});
app.get('/error',(req,res,next)=>{
    const err = new Error("Something went wrong");
    err.status = 500;
    next(err);
});

app.use((err,req,res,next)=>{
    console.log('Error',err.Date);
    res.status(err.status || 500).json({message: err.message,status: err.status || 500});
});
app.use(logger);

app.get('/', (req, res) => {
    res.send('Hello middleware');
});

app.listen(port, () => {
    console.log('server is running');
});