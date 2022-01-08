const { query } = require('./query');
const { mutation } = require('./mutation');
//const { subscription } = require('./subscription');
const { userType } = require('./types');

const typeDefs = [query, mutation, userType];

module.exports = {
	typeDefs,
};
