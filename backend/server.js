// 1. Import the tools we installed
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// 2. Initialize the Express application
const app = express();
const db = require('./db'); // Imports and runs your database connection

// 3. Set up middleware (The security and translation guards)
app.use(cors()); // Allows your React frontend to communicate with this backend
app.use(express.json()); // Tells the server to understand JSON data (like form submissions)

// 4. Create a simple test route to make sure it works
app.get('/api/status', (req, res) => {
    res.json({ message: "Welcome to the Cardiologist API! The server is running perfectly." });
});
// POST route to book a new appointment
app.post('/api/appointments', (req, res) => {
    // 1. Extract the data sent from the frontend
    const { name, phone, email, age, gender, date, time } = req.body;

    // 2. First query: Insert the new patient
    const patientQuery = `INSERT INTO Patients (name, phone, email, age, gender) VALUES (?, ?, ?, ?, ?)`;
    
    db.query(patientQuery, [name, phone, email, age, gender], (err, patientResult) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Failed to register patient" });
        }

        // 3. Grab the auto-generated ID of the patient we just created
        const patientId = patientResult.insertId;

        // 4. Second query: Create the appointment using the new patientId
        const appointmentQuery = `INSERT INTO Appointments (patient_id, date) VALUES (?,?)`;
        
        db.query(appointmentQuery, [patientId, date], (err, apptResult) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: "Failed to book appointment" });
            }

            // 5. Send a success message back to the frontend
            res.status(201).json({ 
                message: "Appointment booked successfully!",
                appointmentId: apptResult.insertId 
            });
        });
    });
});
// POST route for Admin Login
app.post('/api/admin/login', (req, res) => {
    const { username, password } = req.body;

    // 1. Check if the user exists in the database
    const query = `SELECT * FROM Admin WHERE username = ?`;
    
    db.query(query, [username], async (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Database error during login" });
        }

        // 2. If no user is found with that username
        if (results.length === 0) {
            return res.status(401).json({ error: "Invalid username or password" });
        }

        const adminUser = results[0];

        // 3. Compare the typed password with the hashed password in the DB
        const isMatch = await bcrypt.compare(password, adminUser.password);

        if (!isMatch) {
            return res.status(401).json({ error: "Invalid username or password" });
        }

        // 4. If password is correct, create the digital ID badge (JWT)
        const token = jwt.sign(
            { id: adminUser.id, username: adminUser.username }, 
            process.env.JWT_SECRET, 
            { expiresIn: '8h' } // The doctor will be logged out automatically after 8 hours
        );

        // 5. Send the token to the frontend
        res.status(200).json({ 
            message: "Login successful", 
            token: token 
        });
    });
});

// ==========================================
// 🛡️ SECURITY MIDDLEWARE: Verify JWT Badge
// ==========================================
const verifyToken = (req, res, next) => {
    // 1. Check if the frontend sent a token in the headers
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(403).json({ error: "Access Denied: No token provided" });
    }

    // 2. Extract the token (It usually looks like "Bearer eyJhbG...")
    const token = authHeader.split(" ")[1];

    // 3. Verify the token using your secret key
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: "Unauthorized: Invalid or expired token" });
        }
        // If valid, allow them to proceed to the route
        req.adminId = decoded.id;
        next(); 
    });
};

// ==========================================
// 📊 GET ROUTE: Fetch All Appointments
// ==========================================
// Notice we put 'verifyToken' in the middle. It acts as a gatekeeper.
app.get('/api/admin/appointments', verifyToken, (req, res) => {
    
    // We use a SQL JOIN to combine the patient's personal details with their appointment details
    const query = `
        SELECT 
            Appointments.id AS appointmentId,
            Appointments.date,
            Appointments.status,
            Patients.name,
            Patients.phone,
            Patients.age,
            Patients.gender
        FROM Appointments
        JOIN Patients ON Appointments.patient_id = Patients.id
        ORDER BY Appointments.date ASC
    `;

    db.query(query, (err, results) => {
        if (err) {
            console.error("Database fetch error:", err);
            return res.status(500).json({ error: "Failed to fetch appointments" });
        }
        
        // Send the joined data back to the frontend
        res.status(200).json(results);
    });
});

// ==========================================
// 🔄 PUT ROUTE: Update Appointment Status
// ==========================================
app.put('/api/admin/appointments/:id/status', verifyToken, (req, res) => {
    const appointmentId = req.params.id;
    const { status } = req.body; // Expects 'Pending', 'Confirmed', or 'Cancelled'

    const query = `UPDATE Appointments SET status = ? WHERE id = ?`;

    db.query(query, [status, appointmentId], (err, result) => {
        if (err) {
            console.error("Error updating status:", err);
            return res.status(500).json({ error: "Failed to update status" });
        }
        res.status(200).json({ message: "Status updated successfully" });
    });
});

// 5. Define the port and start listening
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});