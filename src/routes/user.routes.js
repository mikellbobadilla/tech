import { Router } from 'express'
import { createUser } from '../controllers/user/create-user.controller.js'
const userRouter = Router()

// Temp
import { existsByEmail, saveUser, getAllUsers } from '../database/repository/user.respository.js'

userRouter.get('/register', (req, res) => {
  return res.status(200).render('layout/register', { head_title: 'register', has_errors: false })
})

userRouter.post('/register', async (req, res, next) => {

  try {
    const hasEmail = await existsByEmail(req.body.email)

    if (hasEmail) throw new Error('User already exists!')

    const user = saveUser(req.body)

    if (!user) throw new Error('An error has ocurred while crating user, please try again!')

    res.status(201).redirect('/login')

  } catch (err) {

    res.status(400).render('layout/register', {
      head_title: 'register',
      has_errors: true,
      error_message: err.message
    })

  }
})

userRouter.get('/all', async (req, res, next) => {
  const users = await getAllUsers()
  res.json({
    data: users
  })
})

export default userRouter