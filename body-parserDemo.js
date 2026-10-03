import express from 'express';
import bodyParser from 'body-parser';
import { getallusers, getuserbycity, getuserbyid, postUser } from './user-service.js';
const app = express();
const port = 1234;

//middleware
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.send("Welcome users");
});
app.get('/users',getallusers);
app.get('/users/:id',getuserbyid);

//Implement for getUserByCity
app.get('/users/city/:city',getuserbycity);

//Implement for post new user 
app.post('/users/post',postUser);
app.listen(port,()=>{
    console.log('Server is running');
});