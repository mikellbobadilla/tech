import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../config/sequelize.js'

class Like extends Model { }

Like.init({
  id_user:{
    type: DataTypes.BIGINT,
    references:{
      model: 'users',
      key: 'id'
    }
  },
  id_post:{
    type: DataTypes.BIGINT,
    references:{
      model: 'posts',
      key: 'id'
    }
  }
}, {
  sequelize,
  timestamps: true,
  updatedAt: true,
  createdAt: true,
  modelName: 'likes'
})

export { Like }