const { Client } = require("postgres");
const client = new Client();
const connectDB = async () => {
  await client.connect();
};
module.exports = { connectDB };
