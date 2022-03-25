const connection = require("./connection");

const validation = (first_name, last_name, email, password) => {
  if (!first_name || typeof (first_name) !== 'string') {
    return {
      error: true,
      message: `O campo "first_name" deve existir e ser uma string`
    }
  };
  if (!last_name || typeof (last_name) !== 'string') {
    return {
      error: true,
      message: `O campo "last_name" deve existir e ser uma string`
    }
  };
  
  if (!email || typeof (email) !== 'string') {
    return {
      error: true,
      message: `O campo "email" deve existir e ser uma string`
    };
  };
  if (!password || typeof (password) !== 'string' || password.length < 6) {
    return {
      error: true,
      message: `O campo "password" ser uma string e ter pelo menos 6 caracteres`
    };
  };
  
  return true;
}

const createUser = async ({ first_name, last_name, email, password }) => {
  const [{ insertId }] = await connection.execute(
    `INSERT INTO data_users.user 
    (first_name, last_name, email, password) VALUES (?, ?, ?, ?)`,
    [first_name, last_name, email, password]
  );
  return {
    id: insertId,
    first_name,
    last_name,
    email,
    password
  };
}


const getUser = async () => {
  const [users] = await connection.execute('SELECT * FROM data_users.user');
  return users;
}

module.exports = {
  validation,
  createUser,
  getUser
};