const config = require('./utils/config');
const app = require('./app'); // the actual Express application
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
const { ApolloServer } = require('apollo-server-express');
const { createServer } = require('http');
const { execute, subscribe } = require('graphql');
const { SubscriptionServer } = require('subscriptions-transport-ws');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');

(async function () {
	const httpServer = createServer(app);

	const schema = makeExecutableSchema({ typeDefs, resolvers });
	const subscriptionServer = SubscriptionServer.create(
		{
			// This is the `schema` we just created.
			schema,
			// These are imported from `graphql`.
			execute,
			subscribe,
		},
		{
			// This is the `httpServer` we created in a previous step.
			server: httpServer,
			// Pass a different path here if your ApolloServer serves at
			// a different path.
			path: '/graphql',
		},
	);

	const server = new ApolloServer({
		schema,
		context: async ({ req }) => {
			const auth = req ? req.headers.authorization : null;
			if (auth && auth.toLowerCase().startsWith('bearer ')) {
				const decodedToken = jwt.verify(auth.substring(7), config.JWT_SECRET);
				const currentUser = await User.findById(decodedToken.id);
				return { currentUser };
			}
		},
		plugins: [
			ApolloServerPluginLandingPageGraphQLPlayground(),
			{
				async serverWillStart() {
					return {
						async drainServer() {
							subscriptionServer.close();
						},
					};
				},
			},
		],
	});
	await server.start();
	server.applyMiddleware({ app });

	const PORT = config.PORT;
	httpServer.listen(PORT, () => {
		console.log(`Server is now running on http://localhost:${PORT}`);
		console.log(`GraphQL Server is now running on http://localhost:${PORT}/graphql`);
	});
})();
