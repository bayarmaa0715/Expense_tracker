// const { Client } = require("postgres");
// const client = new Client();
// const connectDB = async () => {
//   await client.connect();
// };
// module.exports = { connectDB };

const postgres = require("postgres");
require("dotenv").config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: "require",
  connection: {
    options: `project=${ENDPOINT_ID}`,
  },
});

module.exports = sql;
