import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../../config/sequelize.js'
import { User } from './User.js'

class Post extends Model { }

Post.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  sequelize,
  modelName: 'posts'
})

Post.belongsTo(User)
User.hasMany(Post)
export { Post }
