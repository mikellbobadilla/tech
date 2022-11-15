import { env } from '../config/env.js'
/**
 * Generate token `JWT`
 * @param {User} user info the user from the database
 * @returns {String} return token
 */
export const createJWT = ({ id, email, role }) => {
  try {
    const token = JWT.sign({
      id: id,
      email: email,
      role: role
    },
      env.jwt_key, {
      algorithm: 'HS256',
      expiresIn: '2 days'
    })
    return token

  } catch (err) {
    return err
  }
}