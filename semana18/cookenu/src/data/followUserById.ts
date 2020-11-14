import { connection } from "../index";

export default async function followUserById(
    follow_id: string,
    following_id: string
    
) {
    await connection.insert({
        "follow_id": follow_id,
        "following_id": following_id
       
    }).into('cookenu_follow')
}