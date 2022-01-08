const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const loginRouter = require('express').Router();
const User = require('../models/user');

const middleware = require('../utils/middleware');

// @route POST api/account/login
// @decs login , sign with jwt, save token to cookie
// @access public
loginRouter.post('/login', async (request, response) => {
	const body = request.body;
	//console.log(body);
	const user = await User.findOne({ username: body.username });
	const passwordCorrect =
		user === null ? false : await bcrypt.compare(body.password, user.passwordHash);
	if (!(user && passwordCorrect)) {
		return response.status(401).json({
			error: 'invalid username or password',
		});
	}

	const userForToken = {
		username: user.username,
		id: user._id,
	};

	// token expires in 60*60 seconds, that is, in one hour
	//const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: 60 * 60 });
	const token = jwt.sign(userForToken, process.env.SECRET);

	response.status(200).send({ token, username: user.username, name: user.name });
	// return response
	// 	.cookie('access_token', token, {
	// 		httpOnly: false,
	// 	})
	// 	.status(200)
	// 	.json({ message: 'Logged in successfully' });
});

// @route GET api/account/protected
// @decs get information from jwt
// @access authorization require
loginRouter.get('/protected', middleware.tokenExtractor, (req, res) => {
	return res.json({ user: { id: req.userId } });
});
module.exports = loginRouter;
