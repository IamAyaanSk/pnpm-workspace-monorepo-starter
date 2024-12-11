import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import helmet from 'helmet'
import cors from 'cors'

const PORT = process.env.PORT || 3000
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

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!'
  })
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
