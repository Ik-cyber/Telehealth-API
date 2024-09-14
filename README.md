# Telehealth API

## Overview

The Telehealth API allows users to book appointments with doctors and enables doctors to view their scheduled appointments. This API is built using Node.js, TypeScript, Express, and MongoDB.

## Features

- User registration and login
- Appointment booking
- Doctor appointment management
- Token-based authentication

## Table of Contents

1. [Installation](#installation)
2. [Configuration](#configuration)
3. [Usage](#usage)
4. [Endpoints](#endpoints)
5. [Error Handling](#error-handling)
6. [Contributing](#contributing)
7. [License](#license)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/YOUR_USERNAME/Telehealth-API.git
   cd Telehealth-API


2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following:

   ```plaintext
   MONGO_URI=mongodb://localhost:27017/telehealth
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

4. **Build the project:**

   ```bash
   npm run build
   ```

5. **Run the application:**

   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:5000`.

## Configuration

- **MONGO_URI**: MongoDB connection string.
- **JWT_SECRET**: Secret key for JWT signing and verification.
- **PORT**: Port on which the server will run.

## Usage

### Authentication

- **Register a new user:**

  - `POST /api/auth/register`
  - Request body: 
    ```json
    {
      "username": "string",
      "email": "string",
      "password": "string",
      "role": "user" | "doctor"
    }
    ```

- **Login:**

  - `POST /api/auth/login`
  - Request body:
    ```json
    {
      "email": "string",
      "password": "string"
    }
    ```
  - Response:
    ```json
    {
      "token": "jwt_token"
    }
    ```

### Appointment Management

- **Book an appointment:**

  - `POST /api/appointments`
  - Headers:
    ```plaintext
    Authorization: Bearer <jwt_token>
    ```
  - Request body:
    ```json
    {
      "doctorId": "doctor_id",
      "dateTime": "ISO8601_date",
      "description": "optional_description"
    }
    ```

- **Get appointments for a doctor:**

  - `GET /api/appointments/:doctorId`
  - Headers:
    ```plaintext
    Authorization: Bearer <jwt_token>
    ```

## Endpoints

### Authentication

- `POST /api/auth/register`
- `POST /api/auth/login`

### Appointments

- `POST /api/appointments`
- `GET /api/appointments/:doctorId`

## Error Handling

Errors are returned with appropriate status codes and messages. Ensure to handle errors as described:

- `401 Unauthorized`: No token provided or invalid token.
- `400 Bad Request`: Invalid request data.
- `500 Internal Server Error`: General server error.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README to fit your specific needs and provide more details as necessary. This template provides a solid foundation for documenting your API.
