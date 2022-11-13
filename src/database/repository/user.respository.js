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
 * @param {String} email to find in the database
 * @returns {Promise<User|null>} return an User or null
 * Also return an instance of Error if somethings broke 
 */
export const getByEmail = async (email) => {

  const user = await User.findOne({
    attributes: ['id', 'email', 'password', 'role'],
    where: {
      email: email
    }
  })

  return user
}

/**
 * Save the user in the database
 * @param {User} user 
 * @returns {Promise<User|null>} return a model instance of user or null
 */
export const saveUser = async ({ name, surname, password, age, email, role, profession }) => {
  age = Number(age)
  const pass_encoded = await encodePass(password)
  const user = await User.create({
    name: name,
    surname: surname,
    age: age,
    email: email,
    role: role,
    password: pass_encoded,
    profession: profession
  })

  return user
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

/**
 * Return all Users stored on the db
 * @returns {Promise<User []>}
 */
export const getAllUsers = async () => {
  const user = await User.findAll({
    attributes: ['id', 'name', 'email', 'role', 'age', 'createdAt', 'updatedAt']
  })

  return user
}