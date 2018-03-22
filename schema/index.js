const { makeExecutableSchema } = require("graphql-tools");

const mutations = require("./mutations");
const queries = require("./queries");
const typeDefs = require("./typeDefs");

const SchemaDefinition = `
  schema {
    query: Query
    mutation: Mutation
  }
`;

const Query = `
  type Query {
    dataProviders: [DataProvider]
    jobs: [Job]
    job(id: String!): Job
    featuredPlaylists: [Playlist]
    newReleases: [Album]
  }
`;

const Mutation = `
  type Mutation {
    createJob(input: JobInput): Job
    updateJob(id: ID!, input: JobInput): Job
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [SchemaDefinition, Query, Mutation, ...typeDefs],
  resolvers: {
    ...mutations,
    ...queries
  }
});

module.exports = schema;
