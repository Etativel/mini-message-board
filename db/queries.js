const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");

  return rows;
}

async function getUser(user) {
  const { rows } = await pool.query(
    "SELECT * FROM messages WHERE username = ($1)",
    [user]
  );
  return rows;
}

async function insertUser(params) {
  await pool.query(
    `
    INSERT INTO messages (username, message_content) 
    VALUES
    (($1), ($2));
    `,
    [params.username, params.message_content]
  );
}

async function deleteUser(id) {
  await pool.query(
    `
        DELETE FROM messages WHERE id = ($1)
        `,
    [id]
  );
}

module.exports = {
  getAllMessages,
  getUser,
  insertUser,
  deleteUser,
};
