const mysql = require('mysql2');
require('dotenv').config(); // This loads your .env variables

// Create the connection to database
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Connect and test
db.connect((err) => {
    if (err) {
        console.error('❌ Database connection failed:', err.message);
    } else {
        console.log('✅ Connected to the cardio database successfully!');
    }
});

module.exports = db;