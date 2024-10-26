import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
    "username":String,
    "password":String,
    "email":String,
    "role":String
});

const admin = mongoose.model('admins',adminSchema);

export default admin;