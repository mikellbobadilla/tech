import { User } from '../models/User.js'
import { Comment } from '../models/Comment.js'
import { Like } from '../models/Like.js'
import { Post } from '../models/Post.js'
import { sequelize } from '../config/sequelize.js'

User.belongsToMany(Post, {through: Like})
Post.belongsToMany(User, {through: Like})

User.hasMany(Post, {foreignKey: 'id_user'})
Post.belongsTo(User)

Post.hasMany(Comment, {foreignKey: 'id_post'})
Comment.belongsTo(Post)

User.hasMany(Comment, {foreignKey: 'id_user'})
Comment.belongsTo(User)

// Creating Tables
sequelize.sync({ force: true, logging: true })
  .then(() => console.log('All tables created!...'))
  .catch(err => console.error(err.message))