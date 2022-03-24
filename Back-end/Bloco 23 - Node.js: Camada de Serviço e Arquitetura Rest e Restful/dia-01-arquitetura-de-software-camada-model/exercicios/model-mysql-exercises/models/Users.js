const connection = require("./connection");

const validation = (first_name, last_name, email, password) => {
  if (!first_name || typeof (first_name) !== 'string') return false;
  if (!last_name || typeof (last_name) !== 'string') return false;
  if (!email || typeof (email) !== 'string') return false;
  if (!password || typeof (password) !== 'string') return false;
  
  return true;
}

const createUser = async (first_name, last_name, email, password) => {
  connection.execute(
    `INSERT INTO data_users.user 
    (first_name, last_name, email, password) VALUES (?, ?, ?, ?)`,
    [first_name, last_name, email, password]
  );
}

module.exports = {
  validation,
  createUser
};