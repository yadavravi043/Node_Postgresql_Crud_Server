import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../../entities/User';

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
    const userRepository = getRepository(User);
    await userRepository.update(req.body.id,{name:req.body.name,phone:req.body.phone})
    res.json({msg:"user updated "})
    } 
   catch (err) {
    return res.status(400).json({msg:err})
  }
}