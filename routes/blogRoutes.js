const express = require('express')
const {blog_create_get, blog_index, blog_create_post, blog_details, blog_delete} = require('../controllers/blogController')
const router = express.Router()

router.route('/')
  .get(blog_index)
  .post(blog_create_post)

// router.get('/create', blog_create_get);
router.route('/:id')
  .get(blog_details)
  .delete(blog_delete)



module.exports = router
