import { Router } from 'express'
import { authController } from '../controllers/auth/authentication.js'
const auth = Router()

auth.get("/login", (req, res) => {
  return res
    .status(200)
    .render('layout/login', { head_title: 'login', has_errors: true })
})

auth.post('/login', authController)

export default auth
