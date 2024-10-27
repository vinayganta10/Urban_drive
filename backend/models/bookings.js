import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({
    "email":String,
    "car_id":Number,
    "car_name":String
});

const bookings = mongoose.model('bookings',bookingSchema);

export default bookings;