const ExternalURLs = require("./ExternalURLs");

const Artist = `
  type Artist {
    id: String!
    external_urls: ExternalURLs
    href: String
    name: String
    type: String
    uri: String
  }
`;

module.exports = Artist;
