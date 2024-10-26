import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({
    "email":String,
    "car_id":String,
    "car_name":String
});

const user = mongoose.model('users',userSchema);

export default user;