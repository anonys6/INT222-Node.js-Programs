const { Client } = require('pg');

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "clay",
    database: "postgres"
})

client.connect()

const createTable = `CREATE TABLE users (
    firstname TEXT,
    lastname TEXT,
    location TEXT
);`
const insertValue = `INSERT INTO users (firstname, lastname, location) 
VALUES ('John', 'Doe', 'New York');`
const readRows = `SELECT * FROM users`

client.query(readRows, (err, res) => {
    if (!err) {
        console.log(res.rows);
    } else {
        console.log(err.message);
    }

    client.end;
})
