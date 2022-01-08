const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./utils/config');
const productRouter = require('./controllers/Product');
const siteRouter = require('./controllers/Site');
const usersRouter = require('./controllers/User');
const loginRouter = require('./controllers/Login');
const middleware = require('./utils/middleware');

const url = config.MONGODB_URI;

mongoose.connect(url)
	.then(() => {
		console.log('connected to MongoDB');
	})
	.catch((error) => {
		console.log('error connecting to MongoDB:', error.message);
	});

app.use(cors());
app.use(express.json());
app.use(express.static('build'));

app.use(middleware.requestLogger);
app.get('/api/ping', (_req, res) => {
	console.log('someone pinged here');
	res.send('pong');
});

// app.use('/api/blogs', middleware.tokenExtractor, blogsRouter);
app.use('/api/users', usersRouter);
app.use('/api/account', loginRouter);
app.use('/api/products', productRouter);
// @route  / , /about , /Contact ,/home
// @decs listen all route does not match routes above
// @access  public
app.use('/', siteRouter);
if (process.env.NODE_ENV === 'test') {
	const testingRouter = require('./controllers/testing');
	app.use('/api/testing', testingRouter);
}
app.use(middleware.errorHandler);
module.exports = app;
