import { connection } from "../connection";

export default async function insertUser(
    id: string,
    name: string,
    nickname: string,
    email: string,
    password: string,
    role: USER_ROLES
) {

    try{

        await connection.insert({
            id,
            name,
            nickname,
            email,
            password,
            role
        }).into('to_do_list_users')
    }catch(error){
        throw new Error("Erro de banco de dados: " + error.sqlMessage);
    }
}

export enum USER_ROLES {
    NORMAL = 'NORMAL',
    ADMIN = 'ADMIN'
}