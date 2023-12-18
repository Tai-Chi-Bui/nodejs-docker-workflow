const { Pool } = require('pg');
const pool = new Pool({
  host: 'database',
  port: 5432,
  user: 'taibui',
  password: '123456',
  database: 'tai_db',
});

module.exports = pool;
