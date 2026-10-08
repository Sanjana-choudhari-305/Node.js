//import { Pool } from 'pg';
const { Pool } = require('pg')

const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'afteria',     //use your database
    password:'yourpassword',    //use your postgres password
    port:5432,
});
module.exports={pool};