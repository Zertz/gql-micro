const DataProvider = require("./DataProvider");

const Job = `
  type Job {
    id: String!
    name: String
    provider: DataProvider
  }
`;

module.exports = Job;
