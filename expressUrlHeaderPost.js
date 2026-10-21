/*Description
Objective: 
To work with Express.js and URL binding.

Scenario: 
Create an Express.js application with the following two routes:When a POST request (/create-a-service) is made, create a new service with service_id and service_name from the request headers.Push the service object into an array. Return the list as a response after adding the new serviceWhen a GET request (/read-a-service) is made with the service id parameter, search for the service in the list by service_id.  Return the matching service object if found.
When no service is found for the provided service_id, return a 404 error with an appropriate message.


Ensure the server listens on a  port defined by an environment variable or defaults to a specified port.*/

const express = require ('express');
const port = process.env.port || 3000;
const app = express();
app.use(express.json());

let services = [];
app.post('/create-a-service',(req,res)=>{
    const {service_id,service_name} = req.headers;
    const service ={
        service_id,service_name
    };
    services.push(service);
    res.status(201).send(services);
})

app.get('/read-a-service/:id',(req,res)=>{
    const id = req.params.id;
    const service = services.find(sid=>sid.service_id===id);
    if(service){
        res.json(service);
    }else{
        res.status(404).send('Service for this id not found');
    }
})

app.listen(port,()=>{
    console.log("Server running");
})