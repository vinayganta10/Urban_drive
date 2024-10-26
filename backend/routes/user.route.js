import express from 'express';
import {getUser,updateUser} from '../controllers/user.controller.js';

const users = express.Router();

users.get('/:id',getUser);
users.put("/:id",updateUser);