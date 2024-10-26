import express from 'express';
import CORS from 'cors';
import connection from './connect.js';
import user from './models/user.js'
import admin from './models/admin.js';
import routes from './routes/car.route.js';
const port = 4000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(CORS());

connection();

app.get('/',(req,res)=>{
    res.send("working");
});
app.use("/cars",routes);

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
    let exists = await user.find({email:body.email,password:body.password});
    if(exists) res.status(200).send("User logged in successfully");
    else res.status(404).send("Check your username or password");
});

app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
});