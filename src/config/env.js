import dotenv from 'dotenv'
dotenv.config()

export default {
  JWT_KEY: process.env.JWT_KEY,
  DATABASE: process.env.DATABASE,
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  HOST: process.env.HOST,
  PORT: process.env.PORT
}
