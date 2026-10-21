const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const users = [{id: 1, username: 'admin', password: 'password'}];

app.post('/login',(req,res)=>{
    const {username,password} = req.body;
    const user = users.find(u=>u.username && u.password);
    if(!user){
        return res.status(401).json({message: "Invalid Credential"});
    }
    const token = jwt.sign({id: user.id, username: user.username},process.env.secret_key,
        {expiresIn: '1h'}
    );
    res.json({token});
});

app.get('/profile', (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({message: 'invalid token'});

    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.secret_key, (err, decoded) => {
        if (err) return res.status(403).json({message: 'invalid token'});
        res.json({message: 'welcome', user: decoded});
    });
});

app.listen(5000, () => {
    console.log('server started');
});