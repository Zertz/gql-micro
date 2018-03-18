const Artist = require("./Artist");
const ExternalURLs = require("./ExternalURLs");
const Image = require("./Image");

const Album = `
  type Album {
    id: String!
    album_type: String
    artists: [Artist]
    available_markets: [String]
    external_urls: ExternalURLs
    href: String
    images: [Image]
    name: String
    type: String
    uri: String
  }
`;

module.exports = [Album, Artist, ExternalURLs, Image];
