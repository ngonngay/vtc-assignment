const User = require('../models/user');
const { UserInputError, AuthenticationError, PubSub } = require('apollo-server');

const jwt = require('jsonwebtoken');

// const pubsub = new PubSub();
const JWT_SECRET = process.env.SECRET;

const resolvers = {
	Query: {
		me: (root, args, context) => {
			return context.currentUser;
		},
	},
	Mutation: {
		createUser: async (root, args) => {
			const user = new User({ ...args });
			try {
				await user.save();
			} catch (error) {
				throw new UserInputError(error.message, {
					invalidArgs: args,
				});
			}
			return user;
		},
		login: async (root, args) => {
			const user = await User.findOne({ username: args.username });

			if (!user || args.password !== 'thang') {
				throw new UserInputError('wrong credentials');
			}
			const userForToken = {
				username: user.username,
				id: user._id,
			};
			return { value: jwt.sign(userForToken, JWT_SECRET) };
		},
	},
};

module.exports = {
	resolvers,
};
