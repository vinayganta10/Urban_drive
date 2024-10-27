import express from 'express';
import { getAllBookings,getBookingsById,addBooking } from '../controllers/bookings.controller.js';
import validate from '../auth/verify.js';

let bookings = express.Router();
bookings.use(validate);

bookings.post('/',addBooking);
bookings.get('/:id',getBookingsById);
bookings.get('/',getAllBookings);

export default bookings;