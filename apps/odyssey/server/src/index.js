import { ApolloServer } from 'apollo-server';
import typeDefs from './schema';
import resolvers from './resolvers';
import TrackAPI from './dataSources/trackAPI';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      trackAPI: new TrackAPI(),
    };
  },
});

server
  .listen({
    host: process.env.HOST,
    port: process.env.PORT,
  })
  .then(() => {
    console.log(`
    🚀  Server is running!
    🔉  Listening on port ${process.env.PORT}
    📭  Query at http://${process.env.HOST}:${process.env.PORT}
  `);
  });
