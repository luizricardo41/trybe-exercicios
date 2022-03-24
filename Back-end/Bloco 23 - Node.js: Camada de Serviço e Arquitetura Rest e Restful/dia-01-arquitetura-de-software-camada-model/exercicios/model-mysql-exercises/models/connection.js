const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'luizricardo41',
  password: 'lurfer10',
  host: 'localhost',
  database: 'data_users'
});

module.exports = connection;
