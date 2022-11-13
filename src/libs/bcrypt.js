import bcrypt from 'bcrypt'

/**
 * Encode the password using `Bcrypt`
 * @param {String} password user's password
 * @returns {Promise<String>} return a promise with the token
 */
export const encodePass = async (password) => {
  try {
    return await bcrypt.hash(password, 10)
  } catch (err) {
    return err
  }
}

/**
 * Decode the password encoded with `Bcrypt`
 * @param {String} password user's password
 * @param {String} passEncoded password encoded
 * @returns {Promise<Boolean>} return a promise with a boolean
 */
export const decodePass = async (password, passEncoded) => {
  return await bcrypt.compare(password, passEncoded)
}