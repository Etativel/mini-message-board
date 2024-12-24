const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
});

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  username VARCHAR (255),
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
  const client = await pool.connect(); // Get a client from the pool

  try {
    await client.query(SQL);
    console.log("done");
  } catch (err) {
    console.error("Error during seeding:", err);
  } finally {
    client.release(); // Release the client back to the pool
  }
}

main();

module.exports = pool;
