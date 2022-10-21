import { Router } from 'express'
import { renderLoginPage } from '../response_pages/login.page.js'
const authRouter = Router()

authRouter.get('/login', (req, res, next) => {
  return renderLoginPage(res)
})

// authRouter.post('/login')

export { authRouter }