#! /usr/bin/env node

const { Client } = require("pg");

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
    connectionString:
      "postgresql://postgres:admin123081@localhost:5432/messages_board",
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
