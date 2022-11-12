import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../config/sequelize.js'

class Post extends Model { }

Post.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  id_user: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  timestamps: true,
  updatedAt: true,
  createdAt: true,
  modelName: 'posts'
})

export { Post }
