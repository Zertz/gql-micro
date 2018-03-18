const DataProvider = require("./DataProvider");
const Human = require("./Human");

const Enterprise = `
  type Enterprise {
    id: String!
    name: String
    ceo: Human
    employees: [Human]
    provider: DataProvider
  }
`;

module.exports = Enterprise;
