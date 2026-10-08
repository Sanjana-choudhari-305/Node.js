const express = require('express');
const { pool } = require('./postgresDemo.js');
const app = express();
app.use(express.json());

// GET ONE
app.get('/emp/:empid', async (req, res) => {
    try {
        const empid = req.params.empid;

        const result = await pool.query(
            'select * from employee where empid=$1',    //use your table name and attribute from the database u specified
            [empid]
        );

        if (result.rows.length === 0) {
            return res.status(404).send('employee not found');
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error');
    }
});

// GET ALL
app.get('/emp', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM employee'        //use your table name from the database u specified
        );

        res.json(result.rows);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error fetching employees');
    }
});

// app.get('/emp/:empid', async (req,res)=>{
//     try{
//         const empid=req.params.empid;
//         const result=await pool.query('select * from employee where empid=$1',[empid]);
//         if(result.rows.length===0){
//             return res.status(404).send('employee not found');
//         }
//         res.json(result.rows[0]);

//     }catch(err){
//         console.log(err);
//         res.status(500).send('Error');
//     }
// });

//POST
app.post('/emp', async (req, res) => {
    try {
        const { empid, ename, mgrid } = req.body;

        const result = await pool.query(
            'INSERT INTO employee (empid,ename,mgrid) VALUES($1,$2,$3) RETURNING *',    //use your table name and attribute from the database u specified
            [empid, ename, mgrid]
        );

        res.status(201).json(result.rows[0]);

    } catch (err) {
        console.log(err);
        res.status(500).send('error inserting employee');
    }
});

//update -- Do it as per ua table column attributes
app.put('/emp/:empid',async(req,res)=>{
    try{
        const empid=req.params.empid;
        const {ename,mgrid}=req.body;
        const result=await pool.query(
            'update employee set ename=$1,mgrid=$2 where empid=$3 returning *', //use your table name and attribute from the database u specified
            [ename,mgrid,empid]
        );
        if(result.rows.length===0){
            return res.status(404).send('emp not found');
        }
        res.json(result.rows[0]);
    }
    catch(error){
        console.log(error);
        res.status(500).send('error updating employee');
    }
});

//Delete
app.delete("/emp/:empid", async (req, res) => {
  try {
    const empid = req.params.empid;
    const result = await pool.query(
      "delete from employee where empid=$1 returning *",    //use your table name and attribute from the database u specified
      [empid],
    );

    if (result.rows.length === 0) {
      return res.status(404).send("employee not found");
    }

    res.send("employee deleted successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("error deleting employee");
  }
});
app.listen(3000,()=>{
    console.log('Server running on port 3000');
})