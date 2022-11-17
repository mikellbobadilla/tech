import { Sequelize } from 'sequelize'
import env from './env.js'
export const sequelize = new Sequelize(
  env.DATABASE,
  env.USER,
  env.PASSWORD, {
  host: env.HOST,
  dialect: 'mysql'
})