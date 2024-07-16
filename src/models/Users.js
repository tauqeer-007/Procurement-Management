const { pool } = require("../lib/db");

exports.getUsers = async function() {

    console.log("TEST");
    try {
        let sql = `
              SELECT id, "firstName" FROM users where "deletedAt" IS NULL;`
  
        const { rows } = await pool.query(sql)
        let row = rows
        console.log(row)
        return row
      }
      catch (error) {
        console.log(error)
      }
  }