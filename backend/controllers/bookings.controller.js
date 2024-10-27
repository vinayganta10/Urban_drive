import bookings from '../models/bookings.js';

let getAllBookings = async (req, res) => {
    try {
        let allBookings = await bookings.find({});
        res.status(200).json(allBookings);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

let getBookingsById = async (req, res) => {
    try {
        let id = req.params.id;
        let bookingById = await bookings.find({ email: id });
        res.status(200).json(bookingById);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

let addBooking = async (req, res) => {
    try {
        let data = req.body;
        let newBooking = new bookings(data);
        await newBooking.save();
        res.status(201).json({ message: "Booking added successfully!" });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

export { getAllBookings, getBookingsById, addBooking };
