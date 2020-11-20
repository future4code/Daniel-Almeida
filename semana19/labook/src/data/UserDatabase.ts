import { User } from "../model/User";
import BaseDatabase from "./BaseDatabase";

class UserDatabase extends BaseDatabase {


   private static tableName: string = "labook_users"

   public getTableName = (): string => UserDatabase.tableName

   public async signup(
      user: User
   ) {

      try {

         await BaseDatabase.connection.insert({
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword()
            
         }).into(UserDatabase.tableName)
      } catch (error) {
         throw new Error("Erro de banco de dados: " + error.sqlMessage);
      }
   }

   public async getUserByEmail(
      email: string
   ): Promise<User> {
      try {
         const result = await BaseDatabase.connection(UserDatabase.tableName)
            .select("*")
            .where({ email })

         return new User(
            result[0].id,
            result[0].name,
            result[0].email,
            result[0].password
            
         )

      } catch (error) {
         throw new Error(error.slqMessage || error.message)
      }
   }
}

export default new UserDatabase()