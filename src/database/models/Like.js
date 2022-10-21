import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../config/sequelize.js'

class Like extends Model { }

Like.init({
  like_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  }
}, {
  sequelize,
  timestamps: false,
  updatedAt: false,
  createdAt: true,
  modelName: 'likes'
})

export { Like }