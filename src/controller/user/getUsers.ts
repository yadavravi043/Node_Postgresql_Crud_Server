import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../../entities/User';

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
    const userRepository = getRepository(User);
    const user = await userRepository.find();
     return  res.status(200).json({user:user,msg:"User successfully fetched"})
    } 
   catch (err) {
    return res.status(400).json({msg:err})
  }
}