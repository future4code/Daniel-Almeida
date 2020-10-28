// import {Request, Response} from "express"
// import { createNewPokemon, createNewPokemonWithQueryBuilder } from "../data/createNewPokemon";
// import { getPokemons } from "../data/getActors";
// import { Pokemon, POKE_TYPES } from "../types";

// export const createPokemon = async (req: Request, res: Response): Promise<void> => {
//    try {

//       const { id, name, type } = req.body;

//       const pokemons: Pokemon[] = await getPokemons()

//       const pokemon: Pokemon | undefined = pokemons.find(
//          pokemon => pokemon.id === id
//       )

//       if (pokemon) {
//          res.statusCode = 409
//          throw new Error("Id already exists")
//       }

//       if (!(type in POKE_TYPES)) {
//          res.statusCode = 406
//          throw new Error("Invalid Pokemon types")
//       }

//      await createNewPokemonWithQueryBuilder(id, name, type)

//       res.status(201).send("New Pokemon created!");
//    } catch (error) {
//       console.log(error)
//       res.send(error.message)
//    }
// }