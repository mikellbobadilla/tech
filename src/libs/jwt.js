import JWT from 'jsonwebtoken'
import env from '../config/env.js'

/**
 * Extract the token from the request
 * @param {String} cookie rivieved in the request
 * @returns {String} return the token extacted from the request
 */
export const extractToken = (cookie) => {
  const token = cookie.split(' ')[1]
  return token
}

/**
 * Generate token `JWT`
 * @param {User} user info the user from the database
 * @returns {String} return token
 */
export const generateJWT = ({ id, email, role }) => {
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

/**
 * Decode the token and return user info
 * @param {String} token Token generated with JWT
 * @returns {User} return info the user stored in the toke
 */
export const decodeJWT = (token) => {
  const decoded = JWT.decode(token, { complete: false })
  return decoded
}

/**
 * Validate token by expired and key_secret
 * @param {String} token Token generated with JWT
 * @returns {Boolean|String} return `invalid signature` in case the token was modified and `jwt expired` if expired
 */
export const verifyJWT = (token) => {
  try {
    const is_expired = JWT.verify(token, env.jwt_key)
    return is_expired
  } catch (err) {
    return err.message
  }
}