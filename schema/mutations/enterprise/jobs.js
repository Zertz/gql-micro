const uuidv4 = require("uuid/v4");

const DynamoDBClient = require("../../../data/aws/dynamodb");

const TableName = "Jobs";

const createJob = async (obj, args, context, info) => {
  const { name } = args.input;

  const Item = {
    id: uuidv4(),
    name
  };

  const result = await DynamoDBClient.put({
    TableName,
    Item
  }).promise();

  return Item;
};

const updateJob = (obj, args, context, info) => {
  return DynamoDBClient.update({
    TableName,
    Key: {
      short
    },
    UpdateExpression: "set hits = hits + :inc",
    ExpressionAttributeValues: {
      ":inc": 1
    }
  }).promise();
};

module.exports = {
  createJob,
  updateJob
};
