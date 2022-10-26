import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../config/sequelize.js'

class User extends Model { }

User.init({
  user_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  info: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: 'user'
  }
}, {
  sequelize,
  timestamps: false,
  updatedAt: false,
  createdAt: true,
  modelName: 'users'
})

export { User }