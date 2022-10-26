import { getByUsername } from '../database/repository/user.respository.js'
import { compare } from 'bcrypt'
import { generateJWT } from '../libs/jwt.js'

export const authenticate = async (req, res, next) => {
  const { username, password } = req.body
  const user = await getByUsername(username)

  if (!user) {
    return res.status(400).render('layout/login', { head_title: 'login', has_errors: true, error_message: 'username or password incorrect!' })
  }

  const passIsValid = await compare(password, user.password)

  if (!passIsValid) {
    return res.status(400).render('layout/login', { head_title: 'login', has_errors: true, error_message: 'username or password incorrect!' })
  }

  const token = generateJWT(user)

  return res.status(200).cookie('jwt', 'bearer '+ token).redirect('/')
}