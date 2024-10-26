import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connection = async () => {
    try {
        await mongoose.connect(process.env.mongo_uri);
        console.log('Connected to the database');
    } catch (error) {
        console.error('Database connection error:', error);
    }
};

export default connection;
