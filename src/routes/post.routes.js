import { Router } from 'express'
const postRouter = Router()

import { createPost, getAllPosts } from '../controllers/post/post.controller.js'

postRouter.get('/post', (req, res) => {
  return res.status(200).render('layout/create-post', { head_title: 'new post', has_errors: false })
})

postRouter.get('/posts/all', getAllPosts)

postRouter.post('/post', createPost)

export default postRouter