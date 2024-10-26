import express from 'express';
import {getUser,updateUser} from '../controllers/user.controller.js';
import validate from '../auth/verify.js';

const users = express.Router();
users.use(validate);

users.get("/:id",getUser);
users.put("/:id",updateUser);
users.get("/user",(req,res)=>{
    console.log("ok");
})

export default users;