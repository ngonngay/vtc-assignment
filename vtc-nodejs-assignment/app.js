const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const productRouter = require('./controllers/Product');
const siteRouter = require('./controllers/Site');
const usersRouter = require('./controllers/User');
const loginRouter = require('./controllers/Login');
const config = require('./utils/config');
const logger = require('./utils/logger');
const middleware = require('./utils/middleware');
const url = config.MONGODB_URI;

mongoose.connect(url)
	.then(() => {
		console.log('connected to MongoDB', url);
	})
	.catch((error) => {
		console.log('error connecting to MongoDB:', error.message);
	});

app.use(cors());
app.use(express.json());
app.use(cookieParser());
//use static folder
app.use(express.static(path.join(__dirname, 'public')));
//set template path folder
app.set('views', path.join(__dirname, 'resources', 'views'));
//Khai báo templateEngine sử dụng
app.set('view engine', 'pug');

app.use(middleware.requestLogger);

app.use('/products', productRouter);

// @route  / , /about , /Contact ,/home
// @decs listen all route does not match routes above
// @access  public
app.use('/', siteRouter);

// app.use('/api/blogs', middleware.tokenExtractor, blogsRouter);
app.use('/api/users', usersRouter);
app.use('/api/account', loginRouter);
// if (process.env.NODE_ENV === 'test') {
// 	const testingRouter = require('./controllers/testing');
// 	app.use('/api/testing', testingRouter);
// }
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);
module.exports = app;
