const data = [
  {
    id: 1,
    acronym: "AWS",
    name: "Amazon Web Services"
  },
  {
    id: 2,
    acronym: "GCP",
    name: "Google Cloud Platform"
  },
  {
    id: 3,
    acronym: "Azure",
    name: "Microsoft Azure"
  }
];

const dataProviders = (obj, args, context, info) => {
  return data;
};

const dataProvider = (obj, args, context, info) => {
  return data.find(d => d.id === args.id);
};

module.exports = {
  dataProviders
};
