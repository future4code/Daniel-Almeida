import {connection} from "../index"

export const createTodoListUser = async (
    name: string,
    nickname: string,
    email: string
  ): Promise<void> => {
    await connection.raw(`INSERT INTO TodoListUser (name, nickname, email) 
    VALUES (${name},
        "${nickname}",
        "${email}")`)
      
  };