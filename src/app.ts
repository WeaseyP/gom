import { createServer } from 'http'
import express, { Express } from 'express'
import cors from 'cors'

import authHandler from './handler/auth.handler'
import gameHandler from './handler/game.handler'
import healthCheck from './handler/healthcheck.handler'
import gameLogHandler from './handler/gamelog.handler'
import gameCheckHandler from './handler/gameChecker.handler'

require("dotenv").config();

const app: Express = express()

app.use(
  cors({
    origin: process.env.allowHost || true,
  })
)

app.use(express.json())

app.use('/api/gamelog', gameLogHandler)
app.use('/api/game', gameHandler)
app.use('/api/auth',authHandler)
app.use('/api/health', healthCheck)
app.use('/api/gameChecker', gameCheckHandler)


export const server = createServer(app)

export default app
