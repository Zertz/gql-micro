const DynamoDBClient = require("../../../data/aws/dynamodb");

const TableName = "Jobs";

const jobs = async (obj, args, context, info) => {
  const jobs = await DynamoDBClient.scan({
    TableName
  }).promise();

  return jobs.Items;
};

const job = async (obj, args, context, info) => {
  const job = await DynamoDBClient.get({
    TableName,
    Key: {
      id: args.id
    }
  }).promise();

  return job.Item;
};

module.exports = {
  jobs,
  job
};
