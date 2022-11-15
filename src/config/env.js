import { config } from 'dotenv'

config()

const env = {
  jwt_key: process.env.JWT_KEY,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT
}

export { env }