const { makeExecutableSchema } = require("graphql-tools");

const resolvers = require("./resolvers");
const typeDefs = require("./typeDefs");

const RootQuery = `
  type RootQuery {
    featuredPlaylists: [Playlist]
    newReleases: [Album]
  }
`;

const SchemaDefinition = `
  schema {
    query: RootQuery
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [SchemaDefinition, RootQuery, ...typeDefs],
  resolvers
});

module.exports = schema;
