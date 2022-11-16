import { existsByEmail, saveUser } from '../../database/repository/user.respository.js'

export const createUser = async (req, res, next) => {
  try {
    const existsEmail = await existsByEmail(req.body.email)

    if (existsEmail) throw new Error('User already exists!')

    const user = await saveUser(req.body)

    if (!user) throw new Error('An error has ocurred while saving the user, please try again!')

    return res.status(200).redirect('/login')

  } catch (err) {
    return res.status(400).render('layout/register', {
      head_title: 'register',
      has_errors: true,
      error_message: err.message
    })
  }
}