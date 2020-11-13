import { Request, Response } from "express"
import selectUserByEmail, { User } from "../data/selectUserByEmail"
import { generateToken } from "../services/authenticator"
import { compare } from "../services/hashManager"

export default async function login(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const { email, password } = req.body

      let message = "Login!"

      if (!email || !password) {
         res.statusCode = 406
         message = "'email' and 'password' are oblige"
         throw new Error(message)
      }

      const user: User = await selectUserByEmail(email)

      if (!user) {
         res.statusCode = 404
         message = "User not found or password is incorrect"
         throw new Error(message)
      }

      const passwordIsCorrect: boolean = await compare(password, user.password)

      if (!passwordIsCorrect) {
         res.statusCode = 404
         message = "User not found or password is incorrect"
         throw new Error(message)
      }

      const token: string = generateToken({
         id: user.id,
         
      })

      res.send({
         
         token
      })

   } catch (error) {
      let { message } = error

      if(message === "Cannot read property 'id' of undefined"){
         message = "User not found or incorrect password"
         res.statusCode = 404
      }
      
      if(message === "Field 'name' doesn't have a default value"){
         message = "Insert valid name"
         res.statusCode = 406
      }
      res.send({message})
   }
}