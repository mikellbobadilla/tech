import { Post } from '../../database/models/Post.js'
import { savePost } from '../../database/repository/post.repository.js'
import { decodeJWT, extractToken } from '../../libs/jwt.js'

export const createPost = async (req, res, next) => {
  try {
    const token = extractToken(req.cookies.jwt)
    const userlogged = decodeJWT(token)
    console.log(userlogged)
    const postCreated = await savePost(req.body, userlogged.id)

    if (!postCreated) {
      return res.status(400).redirect('/')
    }

    return res.status(201).redirect('/')
  } catch (err) {
    next(err)
  }
}

export const getAllPosts = async (req, res, next) => {
  try{
    const posts = await Post.findAll()
    return res.status(200).json(posts)
  }catch(err){
    next(err)
  }
}