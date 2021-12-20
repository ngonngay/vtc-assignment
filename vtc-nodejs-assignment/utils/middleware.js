const logger = require('./logger');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const requestLogger = (request, response, next) => {
	console.log('Method:', request.method);
	console.log('Path:  ', request.path);
	console.log('Body:  ', request.body);
	console.log('Params:  ', request.params);
	console.log('Query:  ', request.query);
	console.log('---');
	next();
};

const unknownEndpoint = (request, response) => {
	response.status(404).send({ error: 'unknown endpoint' });
};

const errorHandler = (error, request, response, next) => {
	logger.error(error.message);

	if (error.name === 'CastError') {
		return response.status(400).send({ error: 'malformatted id' });
	} else if (error.name === 'ValidationError') {
		return response.status(400).json({ error: error.message });
	} else if (error.name === 'JsonWebTokenError') {
		return response.status(401).json({
			error: 'invalid token',
		});
	} else if (error.name === 'TokenExpiredError') {
		return response.status(401).json({
			error: 'token expired',
		});
	}

	next(error);
};
const tokenExtractor = async (request, response, next) => {
	// code that extracts the token
	const authorization = request.get('authorization');
	if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
		const token = authorization.substring(7);
		const decodedToken = jwt.verify(token, process.env.SECRET);
		request.userId = decodedToken.id;
	}
	next();
};
const authorization = (req, res, next) => {
	const token = req.cookies.access_token;
	console.log(req.cookies);
	if (!token) {
		return res.sendStatus(403);
	}
	try {
		const data = jwt.verify(token, process.env.SECRET);
		req.userId = data.id;
		return next();
	} catch {
		return res.sendStatus(403);
	}
};
module.exports = {
	requestLogger,
	unknownEndpoint,
	errorHandler,
	tokenExtractor,
	authorization,
};
