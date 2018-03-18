const ExternalURLs = require("./ExternalURLs");
const Image = require("./Image");
const Owner = require("./Owner");
const Tracks = require("./Tracks");

const Playlist = `
  type Playlist {
    id: String!
    collaborative: Boolean
    external_urls: ExternalURLs
    href: String
    images: [Image]
    name: String
    owner: Owner
    public: Boolean
    snapshot_id: String
    tracks: Tracks
    type: String
    uri: String
  }
`;

module.exports = [Playlist, ExternalURLs, Image, Owner, Tracks];
