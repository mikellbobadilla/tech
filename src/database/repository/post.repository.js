import { Post } from '../models/Post.js'


/**
 * Create post and store to database
 * @param {Post} post Post Data recieved 
 * @param {Number} id_user id user who created
 * @returns {Promise<boolean>}
 */
export const savePost = async (post, id_user) => {
  const p = await Post.create({
    title: post.title,
    content: post.content,
    type_post: post.type_post,
    userUserId: id_user
  })

  return p === null ? false : true
}