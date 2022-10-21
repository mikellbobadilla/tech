import { User } from '../../models/User.js'
import { encodePass } from '../../../utils/bcrypt.js'

/**
 * Check if exists the user by email
 * @param {String} email to search in the database
 * @returns {Boolean|Error} returns true if the email exists in the database. 
 * Other case return false. 
 * Also return an instance of Error if somethings broke 
 */
export const existsByEmail = async (email) => {
  try {
    const user = await User.findOne({
      where: {
        email: email
      }
    })

    return user === null ? false : true

  } catch (err) {
    return new Error(err.message)
  }
}

/**
 * Check if exists the user by Username
 * @param {String} username to search in the database
 * @returns {Boolean|Error} returns true if the username exists in the database, 
 * other case return false. 
 * Also return an instance of Error if somethings broke 
 */
export const existsByUsername = async (username) => {
  try {
    const user = await User.findOne({
      where: {
        username: username
      }
    })

    return user === null ? false : true

  } catch (err) {
    return new Error(err.message)
  }
}

/**
 * Find and return the user in the database
 * @param {String} username to find in the database
 * @returns {Promise<User|null|Error>} return an User or null
 * Also return an instance of Error if somethings broke 
 */
export const getByUsername = async (username) => {
  try {
    const user = await User.findOne({
      attributes: ['user_id', 'username', 'password'],
      where: {
        username: username
      }
    })

    return user
  } catch (err) {
    return new Error(err.message)
  }
}

/**
 * Save the user in the database
 * @param {User} user 
 * @returns {Promise<User|null|Error>} return a model instance of user or return null
 */
export const saveUser = async (user) => {
  try {
    const pass_encoded = await encodePass(user.password)
    console.log(user)
    const u = await User.create({
      name: user.name,
      last_name: user.last_name,
      age: user.age,
      email: user.email,
      username: user.username,
      password: pass_encoded,
      info: user.info,
      role: user.role
    })

    return u

  } catch (err) {
    return new Error(err.message)
  }
}


/**
 * Find user by `username` and `email`
 * @param {String} username 
 * @param {String} email 
 * @returns {Promise<User|null>}
 */
export const userExists = async (username, email) => {

  try {
    const u = await User.findOne({
      attributes: ['user_id', 'username', 'email'],
      where: {
        username: username,
        email: email
      }
    })

    return u

  } catch (err) {
    return new Error(err.message)
  }
}