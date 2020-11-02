import {connection} from "../index"

export const createTodoListUser = async (
    name: string,
    nickname: string,
    email: string
  ): Promise<void> => {
    await connection.raw(`INSERT INTO TodoListUser (name, nickname, email) 
    VALUES (
      "${name}",
        "${nickname}",
        "${email}")`)
      
  };

  export const getTodoListUserById = async (id: number): Promise<any> => {
    const result = await connection.raw(`
      SELECT TodoListUser.id, TodoListUser.nickname FROM TodoListUser WHERE id = '${id}'
    `);
      console.log(result)
      console.log(result[0][0]);
      return result[0][0];
  };

  export const editTodoListUser = async (
    id: number,
    name: string,
    nickname: string,
    ): Promise<any> => {
    await connection("TodoListUser")
      .update({
        name: name,
        nickname: nickname
      })
      .where("id", id);
  };
  
