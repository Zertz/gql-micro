const { combineResolvers } = require("graphql-resolvers");

const authenticate = require("./authenticate");
const newReleases = require("./new-releases");
const featuredPlaylists = require("./featured-playlists");

module.exports = {
  featuredPlaylists: combineResolvers(authenticate, featuredPlaylists),
  newReleases: combineResolvers(authenticate, newReleases)
};
