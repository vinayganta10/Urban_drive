import express from 'express';
import { Router } from 'express';
import { getCars, postCars, updateCars, deleteCars, getById } from "../controllers/car.controller.js";
import validate from '../auth/verify.js';

const cars = express.Router();
cars.use(validate);

cars.get('/',getCars);
cars.post('/',postCars);
cars.patch('/',updateCars);
cars.delete('/',deleteCars);
cars.get('/:id',getById);

export default cars;