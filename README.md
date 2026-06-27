# 🩺 Heart Care Centre: Clinic Management System

A full-stack, responsive medical clinic website and secure administrative dashboard built for a cardiology practice. This application streamlines patient appointment scheduling and provides clinic staff with a protected, centralized system to manage patient flow.

## 🚀 Features

### Public Patient Portal
* **Modern UI/UX:** Responsive, mobile-first design built with Tailwind CSS.
* **Dynamic Routing:** Seamless, instant page transitions using React Router.
* **Appointment Booking:** Interactive, full-stack booking form with validation (e.g., weekend blocking, strict age/phone constraints).
* **Clinic Information:** Detailed doctor credentials, service descriptions, and an integrated clinic location map.

### Secure Admin Dashboard
* **Authentication:** Protected login system utilizing `bcrypt` for one-way password hashing.
* **Authorization:** Stateless session management using JSON Web Tokens (JWT) to secure API endpoints.
* **Data Aggregation:** Complex MySQL JOIN queries to combine and display patient details with their respective appointment times.
* **Real-time Status Management:** Interactive dashboard allowing staff to instantly update appointment statuses (Pending, Confirmed, Cancelled) with immediate UI feedback.

## 🛠️ Tech Stack

**Frontend:**
* React (Vite)
* Tailwind CSS v3
* React Router DOM
* Lucide React (Icons)

**Backend:**
* Node.js
* Express.js
* JSON Web Tokens (JWT)
* bcrypt

**Database:**
* MySQL (Relational Schema)

---

## ⚙️ Local Setup & Installation

Follow these steps to run the application locally on your machine.

### Prerequisites
* Node.js installed
* MySQL Server installed and running

### 1. Database Setup
Open your MySQL command line or Workbench and run the following commands to construct the database schema:

```sql
CREATE DATABASE ggs_medical;
USE ggs_medical;

CREATE TABLE Patients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255),
    age INT,
    gender VARCHAR(15)
);

CREATE TABLE Appointments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT NOT NULL,
    date DATE NOT NULL,
    status VARCHAR(50) DEFAULT 'Pending',
    FOREIGN KEY (patient_id) REFERENCES Patients(id) ON DELETE CASCADE
);

CREATE TABLE Admin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
