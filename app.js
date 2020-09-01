
const express = require('express')
const app = express()
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')
const port = 3000

// https://www.youtube.com/watch?v=SnoAwLP1a-0

const dbURI = 'mongodb://mario:addqdd@nodetest-shard-00-00.byk8q.mongodb.net:27017,nodetest-shard-00-01.byk8q.mongodb.net:27017,nodetest-shard-00-02.byk8q.mongodb.net:27017/nodetest?ssl=true&replicaSet=atlas-uy1hhb-shard-0&authSource=admin&retryWrites=true&w=majority'

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => {
        app.listen(port)
        console.log(`connected port: http://localhost:${port}`);
    })
    .catch(error => console.log(error));


// register view engine
app.set('view engine', 'pug')

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  
  res.render('about', { title: 'About' });
});

// blog routes
app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});