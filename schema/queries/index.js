const enterprise = require("./enterprise");
const spotify = require("./spotify");

module.exports = {
  Query: {
    ...enterprise,
    ...spotify
  }
};
