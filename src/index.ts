import bodyParser from 'body-parser'
import cors from 'cors'
import express, { Request, Response } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

import config from '@/config'
import routes from '@/routes'

const app = express()

app.use(helmet())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan(config.nodeEnv === 'development' ? 'dev' : 'combined'))

app.use(routes)

// 404
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' })
})

// Global error handler
app.use((err: Error, req: Request, res: Response) => {
  if (config.nodeEnv === 'development') {
    console.error(err.stack)
  }
  res.status(500).json({ error: 'Something broke!', msg: err.message })
})

app.listen(config.port, () => {
  console.log(`Server is running  at http://localhost:${config.port.toString()}`)
})
