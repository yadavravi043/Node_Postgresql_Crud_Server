import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../../entities/User';

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    // const userRepository = getRepository(User);
    const { name,phone} = req.body;
    try {
    // const user = await userRepository.findOne({ where: { email } });

    // if (user) {
    //  return res.status(400).json({msg:"User already exist"}) 
    // }
    const userRepository = getRepository(User);
      const newUser = new User();
      newUser.name = name;
      newUser.phone = phone;
      await userRepository.save(newUser);
     return  res.status(200).json({msg:"User successfully created."})
    } 
   catch (err) {
    return res.status(400).json({msg:err})
  }
}