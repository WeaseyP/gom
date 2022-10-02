import express, { Request, Response } from 'express'

import validateSchema from '../middleware/validateSchema'

import { createGame, getAllGames, getGameById } from '../service/game.service'

import { createGameSchema, getGameSchema } from '../schema/game.schema'

import { deserializeUser } from '../middleware/deserializeUser'



const gameHandler = express.Router()
gameHandler.use(deserializeUser)

//Create a Game
gameHandler.post('/', validateSchema(createGameSchema),
async (req: Request, res: Response) => {
    const game = req.body
    const newGame = await createGame({ ...game })
    return res.status(200).send(newGame)
})


//Find a Game
gameHandler.get('/', async (req: Request, res: Response) => {

    try {
        const userId = req.userId
        const result = await getAllGames(userId)
        
            result.map((g) => ({
                    _id: g._id,
                    userId: g.userId,
                    date: g.date,
                    result: g.newGameStatus
            }))
        return res.status(200).send(result)
    }
    catch(err){
        return res.status(500).send(err)
    }
})



//Check Game Over


export default gameHandler