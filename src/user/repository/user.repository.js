import { User } from '../models/User.js'
import bcrypt from 'bcrypt'

export class UserRepository {
  /**
   * Check if exists the user by email
   * @param {String} email to search in the database
   * @returns {Promise<User>} returns true if the email exists in the database. 
   * Other case return false. 
   * Also return an instance of Error if somethings broke 
   */
  static async getByEmail(email) {
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
  static async save({ name, surname, password, age, email, role, profession }) {
    age = Number(age)
    const pass_encoded = await bcrypt.hash(password, 10)
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
 * Return all Users stored on the db
 * @returns {Promise<User []>}
 */
  static async getAll() {
    const user = await User.findAll({
      attributes: ['id', 'name', 'email', 'role', 'age', 'createdAt', 'updatedAt']
    })
    return user
  }
}
