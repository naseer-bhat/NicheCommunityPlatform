# Threadify Web App

## Introduction
Threadify is a social web app built using **Vite** and **React**, designed to let users log in, read articles based on their preferred topics, and interact by posting threads, liking, commenting, and connecting with other users. The app offers a smooth and dynamic user experience for discovering and sharing content.

### Key Features:
- **User Login/Authentication**: Users can sign up, log in, and manage their accounts.
- **Article Feed**: Users can view articles based on topics they are interested in.
- **Post Threads**: Users can create threads to share thoughts and discussions.
- **Like and Comment**: Interact with threads and posts through likes and comments.
- **User Connections**: Users can connect with each other and engage in conversations.

## Project Type
**Fullstack**

## Deployed App
- **Frontend**: [https://threadify.netlify.app](https://threadify.netlify.app)
- **Backend**: [https://api.threadify.com](https://api.threadify.com)
- **Database**: [MongoDB Atlas](https://mongodb.com)

## Directory Structure




## Video Walkthrough of the project
Attach a very short video walkthrough of all of the features [1 - 3 minutes].

## Video Walkthrough of the codebase
Attach a very short video walkthrough of the codebase [1 - 5 minutes].

## Features
- **User Authentication**: Secure sign-up and login system with JWT-based authentication.
- **Article Feed**: A dynamic feed that displays articles based on user-selected topics.
- **Thread Creation**: Users can create new threads to discuss a variety of topics.
- **Likes and Comments**: Ability for users to like and comment on threads.
- **User Connections**: Users can connect with others, view profiles, and follow their posts.

## Design Decisions or Assumptions
- **Responsive Design**: The frontend is built with responsiveness in mind, ensuring the app works on all screen sizes.
- **JWT Authentication**: JSON Web Tokens (JWT) are used to authenticate users, providing a secure, stateless session.
- **MongoDB for Storage**: MongoDB is used to store user data, articles, threads, comments, and likes.
- **Component-Based UI**: The frontend uses React's component-based architecture for easy maintainability and reusability.

## Installation & Getting Started

To set up and run this project locally, follow these instructions:

### Prerequisites:
- Node.js installed on your machine
- MongoDB Atlas account (if using a remote database)

### Steps to get started:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/threadify.git
    cd threadify
    ```

2. **Install dependencies**:
    For the **frontend**:
    ```bash
    cd frontend
    npm install
    ```

    For the **backend**:
    ```bash
    cd backend
    npm install
    ```

3. **Environment Variables**:
    - Create a `.env` file in the **backend** directory for the following environment variables:
        ```
        MONGO_URI=your_mongodb_connection_string
        JWT_SECRET=your_jwt_secret
        ```
    
4. **Run the Backend**:
    ```bash
    cd backend
    npm start
    ```

    The backend should now be running on `http://localhost:5000` (or whichever port you've set).

5. **Run the Frontend**:
    ```bash
    cd frontend
    npm run dev
    ```

    The frontend will be available at `http://localhost:3000`.

## Usage
Once both the frontend and backend are running:

1. Open the frontend at `http://localhost:3000`.
2. Sign up or log in to start browsing articles.
3. Post threads, like, comment, and connect with other users.

Example for interacting with the app:
- On the homepage, you can filter articles based on topics.
- You can post a new thread by navigating to the **Create Thread** page.

## Credentials
For testing purposes, use the following credentials:
- **Username**: `testuser`
- **Password**: `password123`

## APIs Used
- **MongoDB Atlas**: To store user, thread, and article data.
- **JWT Authentication**: Used for secure login and session management.

## API Endpoints

### 1. Authentication

- **POST** `/api/auth/signup`: Register a new user.
  - Request body: 
    ```json
    { "username": "testuser", "password": "password123" }
    ```
  - Response:
    ```json
    { "message": "User created successfully", "token": "JWT_TOKEN" }
    ```

- **POST** `/api/auth/login`: Log in an existing user.
  - Request body:
    ```json
    { "username": "testuser", "password": "password123" }
    ```
  - Response:
    ```json
    { "message": "Login successful", "token": "JWT_TOKEN" }
    ```

### 2. Articles

- **GET** `/api/articles`: Fetch all articles.
  - Response:
    ```json
    [
      { "id": 1, "title": "Article 1", "content": "Lorem ipsum...", "author": "admin" },
      { "id": 2, "title": "Article 2", "content": "Lorem ipsum...", "author": "admin" }
    ]
    ```

- **GET** `/api/articles/:id`: Fetch a specific article.
  - Response:
    ```json
    { "id": 1, "title": "Article 1", "content": "Lorem ipsum...", "author": "admin" }
    ```

### 3. Threads

- **POST** `/api/threads`: Create a new thread.
  - Request body:
    ```json
    { "title": "New Thread", "content": "This is a new thread" }
    ```
  - Response:
    ```json
    { "message": "Thread created successfully" }
    ```

- **GET** `/api/threads`: Get all threads.
  - Response:
    ```json
    [
      { "id": 1, "title": "New Thread", "content": "This is a new thread", "author": "testuser" }
    ]
    ```

### 4. Likes and Comments

- **POST** `/api/threads/:id/like`: Like a thread.
  - Response:
    ```json
    { "message": "Thread liked successfully" }
    ```

- **POST** `/api/threads/:id/comment`: Add a comment to a thread.
  - Request body:
    ```json
    { "comment": "Great thread!" }
    ```
  - Response:
    ```json
    { "message": "Comment added successfully" }
    ```

## Technology Stack
- **Frontend**:
  - **React**: For building dynamic user interfaces.
  - **Vite**: For fast and optimized bundling and development.
  - **CSS (TailwindCSS or Styled Components)**: For styling the application.

- **Backend**:
  - **Node.js**: Runtime environment for the backend server.
  - **Express.js**: Web framework for Node.js to build RESTful APIs.
  - **MongoDB**: NoSQL database to store user, article, thread, and comment data.
  - **JWT**: JSON Web Tokens for authentication and authorization.

- **Other Tools**:
  - **Netlify**: For deploying the frontend.
  - **MongoDB Atlas**: For hosting the database.

---

Feel free to adjust or add any details depending on your app’s exact setup. This README will help guide users, developers, and reviewers through the setup, usage, and deployment of your **Threadify** app.
