import express, { Application, Request, Response } from 'express';
import "reflect-metadata";
const cors = require('cors')
require('dotenv').config()
const app: Application = express();
import dbCreateConnectionPostgresql from '../src/dbConnection'
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
import userRoutes from './routes/user'





// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('congrats... you are on server home page');
});
app.use('/user',userRoutes);

//get all users
// app.get('/users', async(req: Request, res: Response) => {
//     const userRepo=AppDataSource.getRepository(User)
//     const allRecords=  await userRepo.find()
//     res.json({user:allRecords})
// });


// //delete single  user
// app.post('/deleteuser', async(req: Request, res: Response) => {
//     const userRepo=AppDataSource.getRepository(User)
//       const id=req.body.userId;
//      await userRepo.delete(id)
//     res.json({msg: `User successfully deleted`})
// });


// //insert single  user
// app.post('/createuser', async(req: Request, res: Response) => {
//     const userRepo=AppDataSource.getRepository(User)
//     let user =new User()
//        user.name=req.body.name;
//        user.phone=req.body.phone;
//     const newUser= await userRepo.save(user)
//     res.json({msg:"user created ",user:newUser})
// });


// //update user 
// app.post('/updateuser', async(req: Request, res: Response) => {
//     const userRepo=AppDataSource.getRepository(User)
//      await userRepo.update(req.body.id,{name:req.body.name,phone:req.body.phone})
//     res.json({msg:"user updated "})
// });


// //get user by filter
// app.post('/filteruser', async(req: Request, res: Response) => {
//     const userRepo=AppDataSource.getRepository(User) 
//     const record= await userRepo.findOne({where:{name:req.body.name}})
//     if(record){
//         res.json({msg:"user found ","user":record})
//     }else{
//         res.json({msg:"user not found "})  
//     }
// });



// Error handling middleware
// app.use((err: any, req: Request, res: Response, next: any) => {
//   console.error(err.stack);
//   res.status(500).send('Internal Server Error');
// });

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

(async () => {
    await dbCreateConnectionPostgresql();
  })();

// import { Request, Response, NextFunction } from "express";
// import { getRepository } from "typeorm";
// import { AzureApp } from "../../orm/entities/AzureApps";
// import { User } from "../../orm/entities/User";
// import { AccessToken } from "../../orm/entities/PowerBiAccesstoken";
// import axios from "axios";
// const qs = require("qs");

// export const authorisationUrlcontroller = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//       const azureRepository = getRepository(AzureApp);
//     const azureapp = await azureRepository.find();
//     if (!azureapp) {
//       return res.status(400).json({msg:"AzureApp  not found"})
//      }
//    const azuredata=azureapp[0];

//   let data = qs.stringify({
//     code:req.body.code,
//     grant_type: azuredata.grant_type,
//     client_id: azuredata.client_id,
//     client_secret: azuredata.client_secret,
//     redirect_uri:azuredata.redirect_uri,
//     scope:azuredata.scope,
//   });
//   const uri=azuredata.access_token_uri;
//   let config = {
//     method: "post",
//     maxBodyLength: Infinity,
//     url: uri,
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//       Cookie:
//         "fpc=AgFZzssdQaFIhS-AfUiQDS8f6ix7AQAAABT_StwOAAAAdJkX6AEAAAAjAEvcDgAAAA",
//     },
//     data: data,
//   };

//   const data1 = await axios.request(config);
//   const myfinaldata = data1.data;
//   const tokenRepository = getRepository(AccessToken);
//   const accesstokendata = await tokenRepository.find();

//   if (!accesstokendata) {
//     return res.status(400).json({ msg: "Access token table doesn't  exist" });
//   }

//   const accesstokenda = await tokenRepository.findOne({
//     where: { user: req.body.user.id },
//   });
//   if (!accesstokenda) {
//     //create
//     const newtoken = new AccessToken();
//     newtoken.token = myfinaldata;
//     newtoken.message = "token_generated";
//     newtoken.user = req.body.user.id;
//     await tokenRepository.save(newtoken);

//     return res.status(200).json({ msg: "token successfully created." });
//   } else {
//     //update
//     async function updateToken(
//       id: number,
//       newTokenData: object
//     ): Promise<void> {
//       try {
//         await tokenRepository.update(id, { token: newTokenData,message:"token_updated"});
//         console.log(`Token updated for entity with ID ${id}`);
//          res.status(200).json({ msg: "token successfully updated." });
//       } catch (error) {
//         console.error("Error at updating token:", error);
//         res.status(400).json({ msg:error});
//       }
//     }
//     updateToken(accesstokenda.id, myfinaldata);
//   }
// };

