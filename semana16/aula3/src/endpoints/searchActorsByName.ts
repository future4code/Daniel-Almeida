import { searchActorByName } from "../data/searchActorByName"
import { Request, Response} from "express"

export const getActorFromName = async (req: Request, res: Response) => {
    try {
        const actorByName = await searchActorByName(req.params.name)
        res.status(200).send(actorByName)
    }catch(err) {
        res.status(400).send(err)
    }
}