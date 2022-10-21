import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../config/sequelize.js'

class Post extends Model { }

Post.init({
  post_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type_post: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  timestamps: false,
  updatedAt: false,
  createdAt: true,
  modelName: 'posts'
})

export { Post }
