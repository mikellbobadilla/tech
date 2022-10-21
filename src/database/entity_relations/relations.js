import { User } from '../models/User.js'
import { Comment } from '../models/Comment.js'
import { Like } from '../models/Like.js'
import { Post } from '../models/Post.js'
import { sequelize } from '../config/sequelize.js'

User.hasMany(Post)
User.hasMany(Comment)
User.hasMany(Like)

Like.belongsTo(User)
Like.belongsTo(Post)

Comment.belongsTo(Post)
Comment.belongsTo(User)

Post.hasOne(Like)
Post.hasMany(Comment)
Post.belongsTo(User)

// Creating Tables
sequelize.sync({ force: true, logging: false })
  .then(() => console.log('All tables created!...'))
  .catch(err => console.error(err.message))