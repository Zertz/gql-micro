const fetch = require("node-fetch");

const newReleases = async (obj, args, context, info) => {
  const response = await fetch(
    "https://api.spotify.com/v1/browse/new-releases?country=CA",
    {
      headers: {
        Authorization: `Bearer ${context.access_token}`
      }
    }
  );

  const json = await response.json();

  return json.albums.items;
};

module.exports = newReleases;
