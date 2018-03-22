const DataProvider = require("./DataProvider");
const Job = require("./Job");

const Human = `
  type Human {
    id: ID!
    name: String
    job: Job
    provider: DataProvider
  }
`;

module.exports = Human;
