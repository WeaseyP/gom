import mongoose, { DocumentDefinition, FilterQuery } from 'mongoose'
import GameModel, { GameDocument } from '../model/game.model'

export async function createGame(
    input: DocumentDefinition<GameDocument>
  ) {
    return GameModel.create(input)
  }

export async function getAllGames(userId: String) {
    return await GameModel.find({ userId }).lean()
}

export async function getGameById(id: string){
  return await GameModel.findById(id).lean()
}