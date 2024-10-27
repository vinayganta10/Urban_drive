import bookings from "../models/bookings.js";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "teamtipease@gmail.com",
    pass: "vrwpmaucolxhywkg",
  },
});

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
  const html = `
    <!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #2E5266FF;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 8px;
        }
        .header {
            text-align: center;
            background-color: #2E5266FF;
            color: white;
            padding: 10px;
            border-radius: 8px 8px 0 0;
        }
        .content {
            margin: 20px 0;
            color: #2E5266FF;
        }
        .content p {
            margin: 0;
        }
        .footer {
            text-align: center;
            font-size: 12px;
            color: #777;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Welcome Back to Urban Drive!</h1>
        </div>
        <div class="content">
            <p>Hello user,</p>
            <p>We are pleased to inform you that your recent login to your Urban Drive account was successful.</p>
            <p>If this login was not initiated by you, please contact our support team immediately at support@urbandrive.com.</p>
            <p>We look forward to providing you with an easy and seamless driving experience. Thank you for being a valued user!</p>
        </div>
        <div class="footer">
            <p>Urban Drive Team<br>Contact us: support@urbandrive.com</p>
        </div>
    </div>
</body>
</html>

`;
  try {
    let data = req.body;
    let newBooking = new bookings(data);
    const mailOptions = {
      from: "teamtipease@gmail.com",
      to: "shivasripada04@gmail.com",
      subject: "Your Booking Confirmation",
      html: html,
    };
    await transporter.sendMail(mailOptions);
    await newBooking.save();
    res.status(201).json({ message: "Booking added successfully!" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

export { getAllBookings, getBookingsById, addBooking };
