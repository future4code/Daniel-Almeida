import { Request, Response } from "express";
import { getAddress } from "../services/getAddressInfo";

export default async function getAddressByCep(
   req: Request,
   res: Response
) {
   try {
      const address = await getAddress(Number(req.params.cep))

      if (!address) {
         throw new Error("cep não encontrado")
      }

      res.status(200).send(address)

   } catch (error) {
      res.status(400).send(error.message)
   }
}