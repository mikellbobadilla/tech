import { UserRepository } from '../repository/user.repository.js'

export const createUser = async (req, res, next) => {
  try {
    const existsEmail = await UserRepository.getByEmail(req.body.email)

    if (existsEmail) throw new Error('User already exists!')

    const user = await UserRepository.save(req.body)

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