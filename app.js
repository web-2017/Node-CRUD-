const express = require('express')
const app = express()
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config()
const port = 3000

// import routes
const postRoutes = require('./routes/posts')

// middleware
app.use(express.urlencoded({
  extended: true
}));
app.use(morgan('dev'));
app.use(cors())

app.use(bodyParser.json())
app.use('/posts', postRoutes)


// routes
app.get('/', (req, res) => {
  res.send('Home page')
})


// 404 page
// app.use((req, res) => {
//   res.status(404).render('404', { title: '404' });
// });

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(res => {
    app.listen(port)
    console.log(`connected port: http://localhost:${port}`);
  })
  .catch(error => console.log(error));