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
    connectionString: process.env.DATABASE_URL,
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
