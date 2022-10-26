import express from 'express'
import logger from 'morgan'
import cookieParser from 'cookie-parser'

// Routes
import { indexRoutes } from '../routes/index.routes.js'
import authRouter from '../routes/aut.routes.js'
import userRouter from '../routes/user.routes.js'
// Error Responses
import { renderNotFoundPage } from '../response_pages/notFound.page.js'
import { renderInternalServerPage } from '../response_pages/internalServer.page.js'
const app = express()

// Middlewares
app.use(logger('dev'))
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('view engine', 'ejs')

// Routes
app.use('/', indexRoutes)
app.use(authRouter)
app.use('/users', userRouter)

// Handle Errors
app.use((req, res, next) => {
    return renderNotFoundPage(req.path,res)
})

app.use((err, req, res, next) => {
  console.error(err.status)
  console.error(err)
  return renderInternalServerPage(res)
})

export { app }