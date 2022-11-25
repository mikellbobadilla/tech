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



router.get('/json', async (req, res) => {
  try {

    const posts = await PostRepository.getAll()

    return res.status(200).json({
      message: 'ok',
      data: posts
    })

  } catch (err) {
    console.error(err) // TODO: Delete this shit
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

    return res.redirect('/posts/all')

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

    const posts = await PostRepository.getByUserId(userId)
    res.render('index', {
      head_title: 'index',
      posts: posts
    })
  } catch (err) {
    console.error(err)
  }
})

router.get('/all', async (req, res) => {

  try {

    const posts = await PostRepository.getAll()

    res.render('index', {
      head_title: 'index',
      posts: posts
    })

  } catch (err) {
    console.err(err) // TODO: Delete this shit
    return res.status(400).redirect('/posts/create')
  }

})


router.get('/delete/:id?', async (req, res) => {
  try {
    req.params.id = Number(req.params.id)

    await PostRepository.deleteById(req.params.id)

    return res.status(200).redirect('/posts/all')
  } catch (err) {
    return res.redirect('/posts/json')
  }
})

export default router