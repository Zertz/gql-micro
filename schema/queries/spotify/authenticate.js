const fetch = require("node-fetch");

const authenticate = async (obj, args, context, info) => {
  const response = await fetch(
    "https://accounts.spotify.com/api/token?grant_type=client_credentials",
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${context.spotifyClientId}:${context.spotifyClientSecret}`
        ).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }
  );

  const { access_token } = await response.json();

  if (!access_token) {
    return new Error("Forbidden");
  }

  context.access_token = access_token;
};

module.exports = authenticate;
