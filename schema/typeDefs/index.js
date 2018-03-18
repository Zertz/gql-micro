const enterprise = require("./enterprise");
const spotify = require("./spotify");

module.exports = [...enterprise, ...spotify];
