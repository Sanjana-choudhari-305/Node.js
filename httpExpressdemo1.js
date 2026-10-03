const express = require('express');
//const { use } = require('react');
const app = express();

app.use(express.json());

let users=[
    {id:1, name:"Sanjana"},
    {id:2,name:"Shrisha"}
];

//get method 
app.get('/users',(req,res)=>{
    res.json(users);
});

//Post method
app.post('/users',(req,res)=>{
    const user = req.body;
    users.push(user);

    res.status(201).json({
        message:"User Added Successfully",
        user:user
    });
});

//Put method
app.put('/users/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const user = users.find(u=>u.id===id);
    if(user){
        user.name=req.body.name;
        res.json({
            message:"User Updated Successfully",
            user:user
        });
    }else{
        res.status(404).send("User not found");
    }
})

//delete method
app.delete('/users/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    user=users.filter(u=>u.id!==id);
    res.send("User deleted Successfully")
});

//server starts
app.listen(3030,()=>{
    console.log("Server running on http://localhost:3030")
});