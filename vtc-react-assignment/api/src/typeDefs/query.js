const { gql } = require('apollo-server');

const query = gql`
	type Query {
		me: User
	}
`;

module.exports = {
	query,
};
