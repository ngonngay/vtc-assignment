const logger = require('./logger');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const requestLogger = (request, response, next) => {
	if (request.path === '/graphql') {
		next();
	} else {
		logger.info('Method:', request.method);
		logger.info('Path:  ', request.path);
		logger.info('Body:  ', request.body);
		logger.info('---');
		next();
	}
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
}; //4.20 //4.22
module.exports = {
	requestLogger,
	unknownEndpoint,
	errorHandler,
	tokenExtractor,
};
