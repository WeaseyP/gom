import express, { Request, Response } from 'express'

import validateSchema from '../middleware/validateSchema'

import { getGameById } from '../service/game.service'

import { getGameSchema } from '../schema/game.schema'

const gameLogHandler = express.Router()

gameLogHandler.get('/:id', 
validateSchema(getGameSchema),
async (req: Request, res:Response) => {

    const gameId = req.params.id
    res.send(gameId)
    const game = await getGameById(gameId)
    if(!game) return res.sendStatus(404)
    return res.status(200).json({ ...game })
})

export default gameLogHandler