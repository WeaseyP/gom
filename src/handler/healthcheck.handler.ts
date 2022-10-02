
import express, { Request, Response } from 'express'

const healthCheckHandler = express.Router()

healthCheckHandler.get('/', (req: Request, res: Response) => res.sendStatus(200));

export default healthCheckHandler