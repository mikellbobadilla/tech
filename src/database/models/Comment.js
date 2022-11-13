import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../config/sequelize.js'

import { User } from './User.js'
import { Post } from './Post.js'

class Comment extends Model { }

Comment.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Post,
      key: 'id'
    }
  }
}, {
  modelName: 'comments',
  sequelize,
})

Comment.belongsTo(User)
Comment.belongsTo(Post)
User.hasMany(Comment)
Post.hasMany(Comment)
export { Comment }