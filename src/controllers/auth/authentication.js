import { getByEmail } from '../../database/repository/user.respository.js'
import { decodePass } from '../../libs/bcrypt.js'
import { generateJWT } from '../../libs/jwt.js'

export const authController = async (req, res, next) => {
    try {
      const { email, password } = req.body

      const user = await getByEmail(email)

      if (!user) throw new Error('Credentials incorrect!')

      const passValid = await decodePass(password, user.password)

      if (!passValid) throw new Error('Credentials incorrect!')

      const token = generateJWT(user)

      res.status(200).cookie('jwt', `Bearer ${token}`).redirect('/')

    } catch (err) {
      res.status(400).render('layout/register', {
        head_title: 'register',
        has_errors: true,
        error_message: err.message
      })
    }
  }