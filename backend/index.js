import express from 'express';
import CORS from 'cors';
import connection from './connect.js';

const port = 4000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(CORS());

connection();

app.get('/',(req,res)=>{
    res.send("home");
});

app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
});