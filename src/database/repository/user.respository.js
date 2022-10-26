import { User } from '../models/User.js'
import { encodePass } from '../../libs/bcrypt.js'

/**
 * Check if exists the user by email
 * @param {String} email to search in the database
 * @returns {Promise<Boolean>} returns true if the email exists in the database. 
 * Other case return false. 
 * Also return an instance of Error if somethings broke 
 */
export const existsByEmail = async (email) => {
  const user = await User.findOne({
    where: {
      email: email
    }
  })

  return user === null ? false : true
}

/**
 * Check if exists the user by Username
 * @param {String} username to search in the database
 * @returns {Promise<boolean>} returns true if the username exists in the database, 
 * other case return false. 
 * Also return an instance of Error if somethings broke 
 */
export const existsByUsername = async (username) => {
  const user = await User.findOne({
    where: {
      username: username
    }
  })

  return user === null ? false : true
}

/**
 * Find and return the user in the database
 * @param {String} username to find in the database
 * @returns {Promise<User|null>} return an User or null
 * Also return an instance of Error if somethings broke 
 */
export const getByUsername = async (username) => {

  const user = await User.findOne({
    attributes: ['user_id', 'username', 'password'],
    where: {
      username: username
    }
  })

  return user
}

/**
 * Save the user in the database
 * @param {User} user 
 * @returns {Promise<User|null>} return a model instance of user or return null
 */
export const saveUser = async (user) => {
  user.age = Number(user.age)
  const pass_encoded = await encodePass(user.password)
  const u = await User.create({
    name: user.name,
    surname: user.surname,
    age: user.age,
    email: user.email,
    username: user.username,
    password: pass_encoded,
    info: user.info,
    role: user.role
  })

  return u
}


/**
 * Find user by `username` and `email`
 * @param {String} username 
 * @param {String} email 
 * @returns {Promise<User|null>}
 */
export const userExists = async (username, email) => {

  const u = await User.findOne({
    attributes: ['user_id', 'username', 'email'],
    where: {
      username: username,
      email: email
    }
  })

  return u

}