const { Pool} = require('pg')

const pool = new Pool({
  user: 'tauqeer',
  database: 'procurement',
  password: 'tauqeer',
  port: 5433,
  host: 'localhost',
})

module.exports = { pool };