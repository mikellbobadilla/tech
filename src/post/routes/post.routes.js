import { Router } from 'express'
const router = Router()
import { PostRepository } from '../repository/post.repository.js'

// Temp -> delete this shit
import { Post } from '../../database/models/Post.js'
import Jwt from 'jsonwebtoken'
import env from '../../config/env.js'


// Middleware
router.use(async (req, res, next) => {
  try {
    let { jwt } = req.cookies

    jwt = jwt.split('Bearer ')[1]

    Jwt.verify(jwt, env.JWT_KEY, (err, decoded) => {
      if (err) throw err

      req.body['userId'] = decoded.id

      next()
    })

  } catch (err) {
    res.status(403).redirect('/login')
  }
})



router.get('/all', async (req, res) => {
  try {

    const posts = await PostRepository.getAll()

    return res.status(200).json({
      message: 'ok',
      data: posts
    })

  } catch (err) {
    console.err(err) // TODO: Delete this shit
    return res.status(400).redirect('/posts/create')
  }
})




router.get('/create', (req, res) => {
  try {
    res.status(200).render('layout/create-post', {
      head_title: 'posts',
      has_errors: false,
      error_message: ''
    })
  } catch (err) {
    return res.json(err)
  }
})



router.post('/create', async (req, res) => {
  try {

    const posted = PostRepository.save(req.body)

    if (!posted) throw new Error('An error was ocurred while creating post')

    return res.status(201).redirect('/posts/get')

  } catch (err) {
    return res.json({
      message: err.message
    })
  }
})



router.get('/get', async (req, res) => {
  try {

    let { userId } = req.body


    userId = Number(userId)

    const posted = await Post.findAll({
      where: {
        userId: userId
      }
    })
    res.json({
      data: posted
    })
  } catch (err) {
    console.error(err)
  }
})

export default router