import { Sequelize } from 'sequelize'
import { env } from '../../config/env.js'

export const sequelize = new Sequelize(
  env.database,
  env.user,
  env.password,{
    host: env.host,
    dialect: 'mysql'
  }
)