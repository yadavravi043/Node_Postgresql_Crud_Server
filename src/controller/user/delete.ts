import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../../entities/User';

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
    const userRepository = getRepository(User);
       const id=req.body.userId;
     await userRepository.delete(id)
     return res.status(200).json({msg:'user deleted successfully'})
    } 
   catch (err) {
    return res.status(400).json({msg:err})
  }
}