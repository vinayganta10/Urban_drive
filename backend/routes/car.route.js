import express from 'express';
import { Router } from 'express';
import { getCars, postCars, updateCars, deleteCars, getById } from "../controllers/car.controller.js";
const cars = express.Router();

cars.get('/',getCars);
cars.post('/',postCars);
cars.patch('/',updateCars);
cars.delete('/',deleteCars);
cars.get('/:id',getById);

export default cars;