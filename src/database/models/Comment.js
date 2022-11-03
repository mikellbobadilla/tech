import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../config/sequelize.js'

class Comment extends Model { }

Comment.init({
  comment_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id_post:{
    type: DataTypes.BIGINT.UNSIGNED
  },
  id_user:{
    type: DataTypes.BIGINT.UNSIGNED
  }
}, {
  modelName: 'comments',
  sequelize,
  timestamps: false,
  updatedAt: false,
  createdAt: true
})

export { Comment }