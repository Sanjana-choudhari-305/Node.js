const express = require('express');
const {Client} = require('pg');
//const { cli } = require('winston/lib/winston/config');
const port = 8001
const app = express();
app.use(express.json());

const client = new Client({
    user:'postgres',
    host:'localhost',
    database:'nodejs',
    password:'12301995',
    port:5432,
});

client.connect().catch(err=>{
    console.log('Database connection error: ',err);
    process.exit(1);
});

app.get('/user',async(req,res)=>{
    const username = req.query.username;
    const query = `select * from users where username = '${username}'`;
    try{
        const result = await client.query(query);
        res.json(result.rows);
    }catch(err){
        res.status(500).send('Database error: '+err.message);
    }
})

app.listen(port,()=>{console.log('Server started')});

// http://localhost:8001/user?username=' OR '1'='1