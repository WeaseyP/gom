import dotenv from 'dotenv'
import mongoose from 'mongoose'
import request from 'supertest'
import app from '../src/app'


dotenv.config()

let token = ''

describe('Movies APIs', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://127.0.0.1/testing')
    const res = await request(app).post('/api/auth/register').send({
      username: 'test',
      password: 'test',
    })
    expect(res.status).toBe(200)
    token = res.body.token
  })
})
