import { Router } from 'express'
import { createUser } from '../controllers/user/create-user.controller.js'
const userRouter = Router()

userRouter.get('/create', (req, res) => {
  return res.status(200).render('layout/register', { head_title: 'register', has_errors: false })
})

userRouter.post('/create', createUser)


export default userRouter