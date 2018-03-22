const DataProvider = require("./DataProvider");

const Job = `
  type Job {
    id: ID!
    name: String!
    provider: DataProvider
  }

  input JobInput {
    name: String
  }
`;

module.exports = Job;
