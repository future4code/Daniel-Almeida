import { Request, Response } from "express";
import userBusiness, { UserBusiness } from "../business/UserBusiness";

export class UserController {
   [x: string]: any;

   constructor(
      private userBusiness: UserBusiness
   ) { }

   public async signup(req: Request, res: Response) {
      try {
         const { name, role, email, password } = req.body
         const result = await userBusiness.signup(
            name,
            email,
            password,
            role
         );
         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }

   public async login(req: Request, res: Response) {
      try {
         const { email, password } = req.body
         const result = await userBusiness.login(email, password);
         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }
   
   public async getUserById(id: string) {
      const user = await this.userDatabase.getUserById(id);
  
      if (!user) {
        throw new Error("User not found");
      }
  
      return {
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        role: user.getRole(),
      };
    }
}

export default new UserController(userBusiness)