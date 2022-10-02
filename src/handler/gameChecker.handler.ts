import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import WebSocket from 'ws'
import { intersection } from 'lodash'

import validateSchema from '../middleware/validateSchema'
import { getGameById } from '../service/game.service'
import { updateGame } from '../service/gameUpdate.service'
import { updateGameSchema } from '../schema/game.schema'

const gameCheckHandler = express.Router()


gameCheckHandler.put(
    '/',
    validateSchema(updateGameSchema),
    async(req: Request, res: Response) => {
        const userId = req.userId
        const gameId = req.params.id
        const game = req.body
        const gameForTheSession = await getGameById(gameId)

        const updateGameSession = await updateGame( gameId, userId, { ...game })

        if (!updateGameSession) return res.sendStatus(404)

        return res.status(200).json(updateGameSession)




    }
)
export default gameCheckHandler
