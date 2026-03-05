// 1. Import the tools we installed
const express = require('express');
const cors = require('cors');

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
        const appointmentQuery = `INSERT INTO Appointments (patient_id, date, time) VALUES (?, ?, ?)`;
        
        db.query(appointmentQuery, [patientId, date, time], (err, apptResult) => {
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
// 5. Define the port and start listening
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});