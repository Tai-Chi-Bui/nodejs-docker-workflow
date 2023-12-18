const express = require('express');
const { Pool } = require('pg');
const port = 3000;

const app = express();
app.use(express.json());

const pool = new Pool({
  host: 'database',
  port: 5432,
  user: 'taibui',
  password: '123456',
  database: 'tai_db',
});

// create a table when startup
async function createSchoolsTable() {
  try {
    await pool.query(
      'CREATE TABLE IF NOT EXISTS schools( id SERIAL PRIMARY KEY, name VARCHAR(100), address VARCHAR(100))'
    );
    console.log('Schools table created');
  } catch (err) {
    console.log(err);
    console.log('Schools table creation failed');
  }
}

createSchoolsTable();

// routes
app.get('/', async (req, res) => {
  try {
    const data = await pool.query('SELECT * FROM schools');
    res.status(200).send(data.rows);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.post('/', async (req, res) => {
  const { name, location } = req.body;
  console.log('req.body', req.body);
  try {
    await pool.query('INSERT INTO schools (name, address) VALUES ($1, $2)', [
      name,
      location,
    ]);
    res.status(200).send({ message: 'Successfully added child' });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.listen(port, () => console.log(`Server has started on port: ${port}`));
