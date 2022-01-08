const { gql } = require('apollo-server');

const mutation = gql`
	type Mutation {
		createUser(username: String!, favoriteGenre: String!): User
		login(username: String!, password: String!): Token
	}
`;

module.exports = {
	mutation,
};
