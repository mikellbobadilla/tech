import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../config/sequelize.js'
import { User } from './User.js'
import { Post } from './Post.js'

class Like extends Model { }

Like.init({
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  postId: {
    type: DataTypes.INTEGER,
    references: {
      model: Post,
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'likes'
})

User.belongsToMany(Post, {through: Like})
Post.belongsToMany(User, {through: Like})

export { Like }