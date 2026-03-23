const bcrypt = require('bcrypt');
const db = require('./db'); // Connects to your existing database

const createAdmin = async () => {
    // 1. Define the admin credentials
    const username = 'admin'; 
    const plainTextPassword = 'GGShetty123'; 

    try {
        // 2. Hash the password (scramble it mathematically 10 times)
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds);

        // 3. Insert into the database
        const query = `INSERT INTO Admin (username, password) VALUES (?, ?)`;
        
        db.query(query, [username, hashedPassword], (err, result) => {
            if (err) {
                console.error('❌ Failed to create admin:', err.sqlMessage);
            } else {
                console.log('✅ Admin account securely created!');
                console.log('Username:', username);
                console.log('Hashed Password saved to DB successfully.');
            }
            // Close the script
            process.exit();
        });
    } catch (error) {
        console.error('Encryption error:', error);
        process.exit(1);
    }
};

// Run the function
createAdmin();