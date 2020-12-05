import {Request, Response} from 'express'
import { CreatePostInput, GetPostByIdInput } from './../model/Post';

class PostController{
    public async createPost(
        req:Request,
        res:Response
    ){
        try {
            const input: CreatePostInput = {
                photo: req.body.photo,
                description: req.body.description,
                type: req.body.type,
                token: req.headers.authorization!
            }
            
            if(!input){
                throw new Error("All fields must be fill")
            }
           const message = await postBusiness.createPost(input)

            res
            .status(200).send({message})
        } catch (error) {
            res
            .status(400).send(error.message)
        }
    }

    public async getPostById(
        req:Request,
        res:Response
    ){
        let message = "Success!"
        try {
            const input: GetPostByIdInput = {
                id: req.params.id,
                token: req.headers.authorization!
            }

            const post: Post = await postBusiness.getPostById(input)


            res
            .status(200)
            .send({message, post})
        } catch (error) {
            res
            .status(400).send(error.message)
        }
    }

}
export default new PostController()
