Project Name

Niche Community Platform

Project Description

Niche Community Platform is a web application designed to enable users to connect and engage within specific communities. The backend provides APIs for user management, data retrieval, and secure interactions, while the frontend consumes these APIs to deliver a seamless user experience.

Features

User Management

Create a new user.

Fetch user details by ID.

Authenticate users securely.

APIs

RESTful APIs to handle backend operations.

Endpoints for CRUD operations.

Security

Role-based access control (User/Admin).

Authentication tokens for API access.

Technology Stack

Backend

Language: Node.js

Framework: Express.js

Database: MongoDB with Mongoose

Authentication: JWT (JSON Web Tokens)

Middleware: CORS

Installation and Setup

Prerequisites

Node.js installed (v14 or higher recommended).

MongoDB installed and running locally or accessible via a cloud service.

NPM or Yarn for package management.

Steps

Clone the Repository:

git clone https://github.com/your-repo/niche-community-platform.git
cd niche-community-platform

Backend Setup:

cd backend
npm install
npm start

Configure the .env file with your MongoDB URI, JWT secret, and other environment variables.

Endpoints

1. Get User by ID

URL: /getuser/:id

Method: GET

Description: Fetch user details by ID.

Response:

{
  "_id": "6765918d5e7467861ea8a563",
  "name": "Naseer",
  "email": "n@123",
  "role": "user",
  "createdAt": "2024-12-20T15:47:25.631Z",
  "__v": 0
}

2. Add User

URL: /adduser

Method: POST

Description: Add a new user to the platform.

Request Body:

{
  "_id": "6765918d5e7467861ea8a563",
  "name": "Naseer",
  "email": "n@123",
  "role": "user",
  "createdAt": "2024-12-20T15:47:25.631Z",
  "__v": 0
}

Response:

{
  "_id": "6765918d5e7467861ea8a563",
  "name": "Naseer",
  "email": "n@123",
  "role": "user",
  "createdAt": "2024-12-20T15:47:25.631Z",
  "__v": 0
}

Folder Structure

Backend

backend/
|-- models/
|   |-- userModel.js
|-- routes/
|   |-- userRouter.js
|-- controllers/
|   |-- userController.js
|-- server.js

