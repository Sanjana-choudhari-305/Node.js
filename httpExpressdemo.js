const express = require('express');
const app = express();
const port = 4001;
app.use(express.json())
//Get request
app.get('/',(req,res)=>{
    res.send('Helloooo worldd')
});
const userArray = []
const randomUser={
    id:2,
    name:"Ammu"
}
userArray.push(randomUser);
const userStringify = JSON.stringify(userArray); //Idk why I did this..Imma just keep it tho
app.get('/user',(req,res)=>{
    res.json({
        id: 1,
        name:'Sanjana',
        city:'Gadag'
    });
});

//Get all users- as complete json objects
app.get('/users',(req,res)=>{
    //res.send(userStringify);
    res.json(userArray);
    
})

//get all users names 
app.get('/users/names',(req,res)=>{
    const allNames = userArray.map(user=>user.name);
    // res.json(allNames);
    const userStringify = JSON.stringify(allNames);
    res.send(userStringify);
})

//get users based on their id
app.get('/user/:id',(req,res)=>{
    const userId = parseInt(req.params.id);

    const user = userArray.find(u=>u.id===userId);
    if(!user){
        return res.status(404).json({error: "User not found"});
    }
    res.send(user.name);
})

//Post 
app.post('/post',(req,res)=>{
    const data= req.body;
    console.log("Data received: ",data);
    userArray.push(req.body);
    res.send("Successful");
})

// put
// app.put('/user/id',(req,res)=>{
//     const id = req.params.id;
//     res.send
// })
app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`)
});