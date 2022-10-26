import { saveUser } from '../../database/repository/user.respository.js'
import { existsByEmail, existsByUsername } from '../../database/repository/user.respository.js'

export const createUser = async (req, res, next) => {
  try {
    const existsEmail = await existsByEmail(req.body.email)
    const existsUsername = await existsByUsername(req.body.username)

    if (existsEmail || existsUsername) {
      return res.status(400).render('layout/register', { head_title: 'register', has_errors: true, error_message: 'User or Email already exists' })
    }

    const user = await saveUser(req.body)
    if (!user) {
      return res.status(400).render('layout/register', { head_title: 'register', has_errors: true, error_message: 'Error creating user' })
    }
    return res.status(200).redirect('/login')
  } catch (err) {
    next(err)
  }
}