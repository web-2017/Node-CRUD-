const Blog = require('../models/blog');
const Post = require('../models/Posts')


const post_index = async (req, res) => {
  try {
    const post = await Post.find()
    res.json(post)

  } catch (error) {
    res.json({
      message: error
    })
  }
}

const post_create_post = async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  })

  try {
    const save_post = await post.save()
    res.json(save_post)
  } catch (error) {
    res.json({
      message: error
    })
  }
}

const post_details = async (req, res) => {
  try {
    const singlePost = await Post.findById(req.params.postId)
    res.json(singlePost)
  } catch (error) {
    res.json({
      message: error
    })
  }
}

const post_delete = async (req, res) => {
  try {
    const removePost = await Post.remove({
      _id: req.params.postId
    })
    res.json({
      msg: 'success removed post',
      removePost
    })
  } catch (error) {
    res.json({
      message: error
    })
  }
}

const post_patch = async (req, res) => {
  try {
    const removePost = await Post.updateOne({
      _id: req.params.postId
    }, {
      $set: {
        title: req.body.title
      }
    })
    res.json({
      msg: 'success removed post',
      removePost
    })
  } catch (error) {
    res.json({
      message: error
    })
  }
}


module.exports = {
  post_index,
  post_details,
  post_patch,
  post_create_post,
  post_delete
}