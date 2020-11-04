import { Request, Response } from 'express';
import { filterUser } from '../data/filterUser';
import {inputData} from "../types/User"

// export const searchUser = async (req: Request, res: Response) => {
//   try {

//     const name = req.query.name as string
    

//     if(!name) {
//       throw new Error('Você deve inserir um valor para \'name\'')
//     }

        

//     const result = await filterUser(name)

//     if(!result.length) {
//       res.statusCode = 404;
//       throw new Error('user not found')
//     }

//     res.status(200).send(result)

//   }catch(e) {
//     res.status(400).send(
//       {
//         message: e.message 
//       }
//     )
//   }
// }

export const searchUser = async (req: Request, res: Response) => {
  try {

    const data: inputData = {
      name: req.query.name as string,
      type: req.query.type as string || "type",
      orderBy: req.query.oderBy as string || "DESC",
      page: Number(req.query.page) <= 0 ? 1 : Number(req.query.page) || 1
    }
    

    // if(!data.name) {
    //   throw new Error('Você deve inserir um valor para \'name\'')
    // }
    

        

    const result = await filterUser(data)

    if(!result.length) {
      res.statusCode = 404;
      throw new Error('user not found')
    }

    res.status(200).send(result)

  }catch(e) {
    res.status(400).send(
      {
        message: e.message 
      }
    )
  }
}