import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import helmet from 'helmet'
import cors from 'cors'

import { User } from '@acme/prisma-db'
import prismaClient from '@acme/prisma-db/client'
import { greet } from '@acme/utils'

const PORT = process.env.PORT ?? 3000
const app = express()

app.disable('x-powered-by')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(helmet())
app.use(
  cors({
    origin: '*'
  })
)

greet('Ayaan')

const a: User = {
  name: 'a',
  id: 1,
  email: '',
  createdAt: new Date()
}

app.get('/', (req, res) => {
  const users = prismaClient.user.findMany()
  res.json({
    message: users
  })
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
