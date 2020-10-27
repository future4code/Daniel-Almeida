import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { countries, country } from './countries'

const app: Express = express()

app.use(express.json())
app.use(cors())

app.get("/countries/all", (req: Request, res: Response) => {
   const result = countries.map(country => ({
      id: country.id,
      name: country.name
    }))
    
    res
      .status(200)
      .send(result)
})

app.get("/countries/search", (req: Request, res: Response) => {
   let result: country[] = countries

   if (req.query.name) {
      result = result.filter(
         country => country.name.includes(req.query.name as string)
      )
   }
   
   if (req.query.capital) {
      result = result.filter(
         country => country.capital.includes(req.query.capital as string)
      )
   }
   
   if (req.query.continent) {
      result = result.filter(
         country => country.continent.includes(req.query.continent as string)
      )
   }
})

app.get("/countries/:id", (req: Request, res: Response) => {
   const result: country | undefined = countries.find(
      country => country.id === Number(req.params.id)
   )
   
   if (result) {
      res.status(200).send(result)
   } else {
      res.status(404).send("Not found")
   }
})

app.delete("/countries/:id", (req:Request, res:Response)=>{
   let errorCode: number = 400
   try {

      if(!req.headers.authorization){
         errorCode = 401
         throw new Error()
      }

      const countryIndex: number = countries.findIndex(
         (country) => country.id === Number(req.params.id)
      )

         if(countryIndex === -1){
            errorCode = 404
            throw new Error()
         }

      countries.splice(countryIndex, 1)

      res.status(200).end()
   } catch (error) {
      console.log(error)
      res.status(errorCode).end()
   }
})



app.listen(3003, () => {
   console.log("Servidor rodando na porta 3003")
})