import { UserRepository } from '../../user/repository/user.repository.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import env from '../../config/env.js'

export const auth = async (req, res, next) => {
  try {
    const { email, password } = req.body

    const user = await UserRepository.getByEmail(email)

    if (!user) throw new Error('Credentials incorrect!')

    const passValid = await bcrypt.compare(password, user.password)

    if (!passValid) throw new Error('Credentials incorrect!')

    jwt.sign({
      id: user.id,
      email: user.email,
      role: user.role
    }, env.JWT_KEY, { algorithm: 'HS256', expiresIn: '2 days' }, (err, token) => {
      if (err) throw new Error('An error has ocurred while creating the token')
      
      res.status(200).cookie('jwt', `Bearer ${token}`).redirect('/posts/all')
    })
  } catch (err) {
    res.status(400).render('layout/login', {
      head_title: 'login',
      has_errors: true,
      error_message: err.message
    })
  }
}