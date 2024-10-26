import express from 'express';
import { Router } from 'express';
import {getCars,postCars,updateCars,deleteCars} from "../controllers/car.controller.js";
const routes = express.Router();

routes.get('/',getCars);
routes.post('/cars',postCars);
routes.patch('/cars',updateCars);
routes.delete('/cars',deleteCars);

export default routes;