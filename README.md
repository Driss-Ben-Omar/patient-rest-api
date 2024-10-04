# Patient REST API

A simple RESTful API for managing patient records using Node.js, Express, and Sequelize with MySQL.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)

## Features

- CRUD operations for patient records
- Input validation with Express Validator
- Custom error handling middleware
- Logging requests
- Environment configuration with `.env` file

## Technologies

- Node.js
- Express.js
- Sequelize
- MySQL
- dotenv
- express-validator

## Setup

### Prerequisites

- Node.js and npm installed
- MySQL server running

### Installation

1. **Clone the repository:**

   ```bash
    git clone https://github.com/Driss-Ben-Omar/patient-rest-api.git
    cd patient-rest-api

2. **Install the dependencies:**

   ```bash
    npm install

3. **Create a `.env` file in the root directory and add your database configuration:**

   ```bash
    PORT=3000
    DB_NAME=patient_db
    DB_USER=your_mysql_username
    DB_PASS=your_mysql_password
    DB_HOST=localhost

4. **Create the MySQL database:**

   ```bash
   CREATE DATABASE patient_db;

5. **Start the server:**

   ```bash
   npm start

6. **The server will run on `http://localhost:3000.`**

   ```bash
   CREATE DATABASE patient_db;

## API Endpoints

### Patients

- GET `/patients` - Retrieve all patients
- GET `/patients/:id` - Retrieve a patient by ID
- POST `/patients` - Create a new patient
- PATCH `/patients/:id` - Update an existing patient
- DELETE `/patients/:id` - Delete a patient

## Error Handling

The API includes custom error handling middleware to manage not found and internal server errors.

- 404 Not Found - Returns a JSON response with a message when a resource is not found.
- 500 Internal Server Error - Returns a JSON response with a message when an unexpected error occurs.