const { Pool } = require('pg');

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "clay",
    database: "etp"
})

pool.connect()

const createDatabase = `CREATE DATABASE etp;`
const createTable = `CREATE TABLE users (
    firstname TEXT,
    lastname TEXT,
    location TEXT
);`
const insertValue = `INSERT INTO users (firstname, lastname, location) 
VALUES ('John', 'Doe', 'New York');`;
const readRows = `SELECT * FROM users`;
const deleteDatabase = `DROP DATABASE etp;`
const deleteRows = `DELETE FROM users WHERE firstname = 'John' AND lastname = 'Doe' AND location = 'New York';`

pool.query(readRows, (err, res) => {
    if (!err) {
        console.log(res.rows);
    } else {
        console.log(err.message);
    }

    pool.end;
})
