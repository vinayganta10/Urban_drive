import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

async function signer(data){
    return jwt.sign(data,process.env.secret,{"expiresIn":"1h"});
}

export default signer;