import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../config/sequelize.js'

import { User } from './User.js'
import { Post } from './Post.js'

class Comment extends Model { }

Comment.init({
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
  id_post: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'posts',
      key: 'id'
    }
  }
}, {
  modelName: 'comments',
  sequelize,
  timestamps: true,
  updatedAt: true,
  createdAt: true
})

export { Comment }