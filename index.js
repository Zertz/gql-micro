require("dotenv").config();

const { microGraphql, microGraphiql } = require("apollo-server-micro");
const { parse } = require("url");

const cors = require("micro-cors")();

const schema = require("./schema");

module.exports = cors((req, res) => {
  const url = parse(req.url);

  if (url.pathname === "/graphiql") {
    return microGraphiql({ endpointURL: "/" })(req, res);
  }

  return microGraphql({
    schema,
    context: {
      spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
      spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET
    }
  })(req, res);
});
