import { Request, Response } from "express";
import { createUserBusiness } from "../../business/user/createUserBusiness";

export default async function createUser(
    req: Request,
    res: Response
) {
    try {

        const input = {
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        }

       const token = await createUserBusiness(input);

        res
            .status(201)
            .send({
               message:"Usuário criado!",
               token
            })

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}