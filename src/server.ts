import compression from 'compression'
import express from 'express'
import helmet from 'helmet'
import routes from './app/routes'
import errorHandler from './app/middlewares/error.middleware'
import { apiRateLimiter } from './app/rate-limiters/apiRateLimiter'
import cors from './config/cors'
import 'dotenv/config'
import './utils/env'

const app = express()

app.use((req, _, next) => {
  req.headers.origin = req.headers.origin || req.headers.host
  next()
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(compression())
app.use(helmet())
app.disable('x-powered-by')

// global rate limiters
app.use(apiRateLimiter)

// non-api routes
app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' })
})

// api routes
app.use('/api', routes)

app.use(errorHandler.notFound)
app.use(errorHandler.converter)
app.use(errorHandler.handler)


const port = process.env.PORT || 3000

app.listen(port, () =>
  console.log(`API server ready at: http://localhost:${port}`)
)
