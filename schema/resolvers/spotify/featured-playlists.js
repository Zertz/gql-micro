const fetch = require("node-fetch");

const featuredPlaylists = async (obj, args, context, info) => {
  const response = await fetch(
    "https://api.spotify.com/v1/browse/featured-playlists?country=CA&locale=fr_CA",
    {
      headers: {
        Authorization: `Bearer ${context.access_token}`
      }
    }
  );

  const json = await response.json();

  return json.playlists.items;
};

module.exports = featuredPlaylists;
