import express from 'express';
import CORS from 'cors';
import connection from './connect.js';
import user from './models/user.js'
import cars from './routes/car.route.js';
import users from './routes/user.route.js';
import signer from './auth/sign.js';
import bookings from './routes/bookings.route.js';

const port = 4000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(CORS());

connection();

app.use("/cars",cars);
app.use("/users",users);
app.use("/bookings",bookings);

app.get('/',(req,res)=>{
    res.send("working");
});

app.post('/signup',async (req,res)=>{
    let body = req.body;
    const newUser = new user(body);
    let exists = await user.find({email:body.email});
    if(exists.length!=0) res.status(404).send("User already exists");
    await newUser.save().then(()=>{console.log("created new user");});
    res.status(200).send("User created");
});

app.post('/login',async (req,res)=>{
    let body = req.body;
    let exists = await user.findOne({email:body.email,password:body.password});
    if(exists){
        let token = await signer({email:body.email});
        res.status(200).send({"token":token,"role":exists.role});
    }
    else res.status(300).send("Check your username or password");
});

app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
});