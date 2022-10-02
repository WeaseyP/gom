import { string } from 'zod';
import mongoose, { Document } from "mongoose"
import { UserDocument } from './user.model'; 

type Position = [number, number]

export interface GameDocument extends Document {
    userId: string;
    size: number;
    date: Date;
    newGameStatus: string;
    moves: Position
}

const gameSchema = new mongoose.Schema({
    userId: String,
    size: Number,
    date: Date,
    newGameStatus: String,
    moves: [[Number]]
})


export default mongoose.model<GameDocument>("Game", gameSchema)