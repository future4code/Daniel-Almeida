import { connection } from "..";

export default async function insertRecepi(
    id: string,
    user_id: string,
    title: string,
    description: string,
    created_at: string
    
) {
    await connection('cookenu_recipes')
        .insert({
            id,
            user_id,
            title,
            description,
            created_at
        })
}