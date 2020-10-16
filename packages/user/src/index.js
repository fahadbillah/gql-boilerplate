import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import config from '@fhd/config';

import typeDefs from './schema';
import resolvers from './resolvers';

const { services: { user: { port } } } = config;
const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
