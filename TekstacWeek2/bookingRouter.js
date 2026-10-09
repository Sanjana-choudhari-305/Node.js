import express from 'express';
import {readAllBookings,createBooking} from './Booking.js'
const router = express.Router();
router.get('/read-all-bookings/',readAllBookings);
router.post('/create-a-booking/',createBooking);
export default router;