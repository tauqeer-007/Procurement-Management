const Postgrator = require("postgrator");
const pg = require("pg");
const path = require("path")

async function main() {
  // Create a client of your choice
  const client = new pg.Client({
    host: "localhost",
    port: 5432,
    database: "procurement",
    user: "ss",
    password: "tauqeer",
  });
console.log(path.join(__dirname, "../../migrations/*"))
  try {
    // Establish a database connection
    const check = await client.connect();
    console.log("CCCC");

    // Create postgrator instance
    const postgrator = new Postgrator({
      migrationPattern: path.join(__dirname, "../../migrations"),
      driver: "pg",
      database: "procurement",
      port:5433,
      user:"tauqeer",
      password:"tauqeer",
      execQuery: (query) => client.query(query),
    });

    // Migrate to specific version
  //  const appliedMigrations = await postgrator.migrate("001");
    //console.log(appliedMigrations);

    // Or migrate to max version (optionally can provide 'max')
    const migrationCheck = await postgrator.migrate();
  } catch (error) {
      console.log("Error=======>", error    )
    // If error happened partially through migrations,
    // error object is decorated with appliedMigrations
    console.error(error.appliedMigrations); // array of migration objects
  }

  // Once done migrating, close your connection.
  //sawait client.end();
}
main();