import user from '../models/user.js';

const getUser = async (req,res)=>{
    let id = req.params.id;
    const data = await(user.findOne({email:id}));
    const userData = {
        "username":data.username,
        "email":data.email,
        "phone":data.phone
    }
    res.send(userData);
}

const updateUser = async (req,res)=>{
    let id = req.params.id;
    let body = req.body;
    const updated = req.body;
    await user.findOneAndUpdate({email:id},updated);
    res.send("updated");
}

export default {getUser, updateUser};
