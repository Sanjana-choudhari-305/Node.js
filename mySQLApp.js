import express from 'express';
import bodyParser from 'body-parser';
import { addNewEmployee, deleteEmployee, getAllEmployees, getEmployeeById, updateManager } from './mySQLDemo.js';

const app = express();
app.use(bodyParser.json());

app.get('/api/employees',getAllEmployees);
app.get('/api/employees/:id',getEmployeeById);
app.post('/api/addNewEmp',addNewEmployee);
app.put('/api/update',updateManager);
app.delete('/api/delEmp/:id',deleteEmployee);

app.listen(3000,()=>{console.log('Server started at 3000')});