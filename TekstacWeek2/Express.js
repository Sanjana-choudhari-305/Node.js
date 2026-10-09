//const express = require('express');
import express from 'express';
//const bodyparser = require('bodyParser')
import bodyParser from 'body-parser';
import bookingRouter from './bookingRouter.js'
import serviceRouter from './serviceRouter.js'
// import { createBooking, readAllBookings } from './Booking';
// import { createService, updateService } from './Services';
const app = express();

//app.use(express.json());
app.use(bodyParser.json());
app.use('/booking',bookingRouter)
app.use('/services',serviceRouter)

// app.get('/booking/read-all-bookings/',readAllBookings);
// app.post('/booking/create-a-booking/',createBooking);

// app.post('/services/create-a-service/',createService);
// app.put('/services/update-a-service/:id',updateService);
app.listen(3000,()=>{
    console.log('Server is running at port 3000')
});