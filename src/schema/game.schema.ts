import { update } from 'lodash'
import { object, string, number, array, TypeOf, date} from 'zod'

const payload = {
    body: object({
      userId: string({
        required_error: 'User id is required',
      }),
      size: number({
        required_error: 'Size is required',
      }),
      date: string({
        required_error: 'Date is required',
      }),
      newGameStatus: string({
        required_error: 'Game Status is required',
      }),
      moves: 
      array(
        array(
          number({
          required_error: 'Moves are required',
      }),
    )),
  })
}

const getParams = {
    params: object({
      gameId: string({
        required_error: 'Game id is required',
      }),
    }),
  }


const updateParams = {
    params: object({
      id: string({
        required_error: 'Game id is required',
      }),
    }),
  }

export const createGameSchema = object({
    ...payload,
  })

export const getGameSchema = object({
    ...getParams,
  })

export const updateGameSchema = object({
    ...updateParams,
  })


export type CreateGameInput = TypeOf<typeof createGameSchema>
export type ReadGameInput = TypeOf<typeof getGameSchema>
export type UpdateGame = TypeOf<typeof updateGameSchema>