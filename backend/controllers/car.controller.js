import carModel from "../models/cars.js";
/*
    car_id :
    {
        type : Number,
        unique : true , 
        required :true
    },
    car_name :
    {
        type:String,
        required : true
    },
    car_color :
    {
        type : String , 
        required : true
    } ,
    car_available :
    {
        type : Boolean,
        required : true
    },
    car_price :
    {
        type :Number,
        required : true
    },
    car_location :
    {
        type : String
    },
    car_seater :
    {
        type : Number,
        required : true
    },
    car_description :
    {
        type : String ,
        required : true
    }
*/
const getCars = async(req,res)=>
{
    try
    {   
        const cars = await carModel.find({});
        if(cars)
        {
            res.status(200).json(cars);
        }
        else
        {
            res.status(404).json({msg:"not found"});
        }
    }
    catch(err)
    {
        res.status(500).json({msg:"error in server"});
    }
};
const postCars = async(req,res)=>
{
    try
    {
        const details = req.body;
        if (details) 
        {
            try 
            {
                const carDetails = await carModel.create({
                    car_id: details.car_id,
                    car_name: details.car_name,
                    car_color: details.car_color,
                    car_available: details.car_available,
                    car_price: details.car_price,
                    car_location: details.car_location,
                    car_seater: details.car_seater,
                    car_description: details.car_description
                });
                res.status(201).json({
                    message: "Car added successfully",
                    carDetails
                });
            } 
            catch (error) 
            {
                res.status(500).json({
                    message: "Failed to add car",
                    error: error.message
                });
            }
        } 
        else 
        {
            res.status(400).json({
                message: "No car details provided"
            });
        }  
    }
    catch(err)
    {
        res.status(500).json({ msg: 'error', error: err.message });
    }
}
const updateCars = async(req,res)=>
    {
        try
        {
            const RequpdatedDetails = req.body;
            if(car_id)
            {
                const updatedDetails = await carModel.findOneAndUpdate({car_id:RequpdatedDetails.car_id},updatedDetails,{new:true});
                if (updatedDetails) 
                {
                    res.status(200).json({ msg: 'success', updatedDetails });
                } 
                else 
                {
                    res.status(404).json({ msg: 'not found' });
                }
            }
            else
            {
                res.status(404).json({msg:"car id is unavailable"});
            }
        }
        catch(err)
        {
            res.status(500).json({ msg: 'error', error: err.message }); 
        }
    }
const deleteCars = async(req,res)=>
    {
        try
        {
            const car_id = req.body.car_id;
            if(car_id)
            {
                const deletedCar = await carModel.findByIdAndDelete({car_id:car_id});
                if (deletedCar) 
                {
                    res.status(200).json({ msg: 'success' });
                } 
                else 
                {
                    res.status(404).json({ msg: 'error' });
                }
            }
            else
            {
                res.status(404).json({msg:"error"});
            }
        }
        catch(err)
        {
            res.status(500).json({ msg: 'error', error: err.message });        
        }
    }
export default {getCars,postCars,updateCars,deleteCars};