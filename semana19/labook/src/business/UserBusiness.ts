import userDatabase from "../data/UserDatabase";
import { CreateUserInput, User, CreateUserOutput } from "../model/User";
import authenticator from "../services/authenticator";
import { CustomError } from "../errors/CustomError";
import hashManager from "../services/hashManager";
import idGenerator from "../services/idGenerator";

class UserBusiness {
   public async signup(input: CreateUserInput): Promise<string> {
      try {
         if (
            !input.name ||
            !input.email ||
            !input.password 
            
         ) {
           throw new CustomError(406, 'Fill all fields')
         }

         const id: string = idGenerator.generateId()

         const cypherPassword = await hashManager.hash(input.password);

         const newUser: User = new User(
            id,
            input.name,
            input.email,
            cypherPassword
            
         )

         await userDatabase.signup(newUser)

         let output: CreateUserOutput;

         const token = authenticator.generateToken({
            id            
         });

         return token;

      } catch (error) {

         
         throw new CustomError(400, error.sqlMessage || error.message);
      }

   }
}

export default new UserBusiness()