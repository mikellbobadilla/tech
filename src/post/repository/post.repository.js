import { Post } from '../../database/models/Post.js'
import { User } from '../../database/models/User.js'


export class PostRepository {

  /**
   * Return All posts stored in the db
   * @returns {Promise<Post[]>}
   */
  static async getAll() {
    const posts = await Post.findAll({
      include: [{
        model: User,
        attributes: ['name', 'email', 'role']
      }],
      attributes: ['id', 'title', 'content', 'createdAt']
    })

    return posts
  }


  /**
   * Store data into to db
   * @param {Post} postObject 
   * @returns {Promise<Post|null>}
   */
  static async save({ userId, title, content }) {
    const posted = await Post.create({
      userId: userId,
      title: title,
      content: content
    })

    return posted
  }

  /**
   * Get all post where userId is the same to the client
   * @param {Number} userId user id  
   * @returns {Promise<Post[]}
   */
  static async getByUserId(userId) {
    const posts = await Post.findAll({
      attributes: ['id', 'title', 'content', 'userId'],
      where: {
        userId: userId
      },
      include: [{
        model: User,
        attributes: ['name', 'email', 'role']
      }]
    })
    return posts
  }

  static async deleteById(postId){
    const deleted = Post.destroy({
      cascade: true,
      where: {
        id: postId
      }
    })
    return deleted
  }

}