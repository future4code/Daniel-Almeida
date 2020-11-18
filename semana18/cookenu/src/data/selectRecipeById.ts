import { connection } from "..";

export default async function selectTaskById(
    id: string
): Promise<any> {
    const result = await connection.raw(`
        SELECT * FROM cookenu_recipes 
        WHERE id = '${id}';
    `)

    return result[0][0]
}