export type AuthenticationData = {
    id: string
 }
 
 export class User {
    constructor(
      private id: string,
      private name: string,
      private email: string,
      private password: string
    ){
    }
 
   public getId = (): string => this.id
   public getName = (): string => this.name
   public getEmail = (): string => this.email
   public getPassword = (): string => this.password
   
}

 export type CreateUserInput = {
    name: string,
    email: string,
    password: string
 }
 
 export type CreateUserOutput = {
   token: string
}