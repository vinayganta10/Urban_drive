/*

backend --> db
model

1.schema
2.model
3.export
*/
import mongoose from "mongoose";

const carSchema = mongoose.Schema({
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
});
const carModel = mongoose.model(carSchema);
export default carModel;