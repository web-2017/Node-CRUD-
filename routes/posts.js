const express = require('express')
const router = express.Router()
const {
    post_index,
    post_create_post,
    post_details,
    post_delete,
    post_patch
} = require('../controllers/postsController')

// GET back all post
router.get('/', post_index)
// create post
router.post('/', post_create_post)
// get id post
router.get('/:postId', post_details)
// delete id post
router.delete('/:postId', post_delete)
// update  post
router.patch('/:postId', post_patch)





module.exports = router