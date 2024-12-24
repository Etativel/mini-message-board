#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  message_content VARCHAR (255),
  send_at DATE DEFAULT CURRENT_DATE
);

INSERT INTO messages (username, message_content) 
VALUES
  ('Bryan', 'Hello there'),
  ('Ryan', 'Hello mike');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:5432/${process.env.DATABASE_NAME}`,
  });

  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();

module.exports = {
  main,
};
