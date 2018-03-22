const { combineResolvers } = require("graphql-resolvers");

const dataProviders = require("./data-providers");
const jobs = require("./jobs");

module.exports = {
  ...dataProviders,
  ...jobs
};
