import GameModel from '../model/game.model'
import mongoose, { DocumentDefinition, FilterQuery } from 'mongoose'


export async function updateGame(
    id: string,
    userId: string,
    latestMove: [number, number]
  ) {
    return GameModel.findOneAndUpdate(
      {
        _id: new mongoose.Types.ObjectId(id),
        userId: new mongoose.Types.ObjectId(userId),
      },
      latestMove,
      { new: true } // new option to true to return the document after update was applied.
    )
  }
