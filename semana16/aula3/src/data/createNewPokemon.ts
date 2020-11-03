// import {connection} from "../index"
// import { POKE_TYPES } from "../types";

// export async function createNewPokemon(
//    id: number,
//    name: string,
//    type: POKE_TYPES
// ): Promise<void> {
//    try {
//       await connection.raw(`
//          INSERT INTO pokemons (id, name, type) VALUES (
//             ${id},
//             "${name}",
//             "${type}"
//          );
//       `)

//       console.log("Sucesso")
//    } catch (error) {
//       console.log(error)
//    }
// }

// export async function createNewPokemonWithQueryBuilder(
//    id:number,
//    name: string,
//    type: POKE_TYPES
// ): Promise<void>{
//    try {
//       await connection
//          .insert({
//             id,
//             name,
//             type
//          })
//          .into("pokemons")

//       console.log("Sucesso")
//    } catch (error) {
//       console.log(error)
//    }
// }