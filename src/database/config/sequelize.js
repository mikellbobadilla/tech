import { Sequelize } from 'sequelize'
import env from '../../config/env.js'

// dotenv.config()
export const sequelize = new Sequelize(
  env.DATABASE,
  env.USER,
  env.PASSWORD, {
  host: env.HOST,
  dialect: 'mysql'
})