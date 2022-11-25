import express from 'express'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
// Routes
import authRouter from '../authentication/routes/auth.routes.js'
import userRouter from '../user/routes/user.routes.js'
import postRoutes from '../post/routes/post.routes.js'

// Exeptions
import { notFoundExeption } from '../exeptions/not_found.js'
import { internalServerExeption } from '../exeptions/internal_server.js'
const app = express()

// Middlewares
app.use(logger('dev'))
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.json())

// Routes
app.use(authRouter)
app.use('/users', userRouter)
app.use('/posts', postRoutes)

// Handle Errors
app.use(notFoundExeption)
app.use(internalServerExeption)

export { app }