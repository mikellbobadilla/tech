import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../../config/sequelize.js'


class User extends Model { }

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
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
    allowNull: false,
    unique: true
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'USER'
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  profession: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'users'
})

export { User }