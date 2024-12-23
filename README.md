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
**Fullstack (https://threadify-app.netlify.app/)**

## Deployed App
- **Frontend**: [https://threadify-app.netlify.app/](https://threadify-app.netlify.app/)
- **Backend**: [https://nichecommunityplatform.onrender.com/](https://nichecommunityplatform.onrender.com/)
- **Database**: [MongoDB Atlas](https://mongodb.com)

## Directory Structure




## Video Walkthrough of the project
Attach a very short video walkthrough of all of the features [1 - 3 minutes] (https://youtube.com)

## Video Walkthrough of the codebase
Attach a very short video walkthrough of the codebase [1 - 5 minutes] (https://youtube.com)

## Features
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
    git https://github.com/naseer-bhat/NicheCommunityPlatform
    cd NicheCommunityPlatform
    ```

2. **Install dependencies**:
    For the **frontend**:
    ```bash
    cd frontend
    npm install
    ```

    For the **backend**:
    ```bash
    npm install
    ```

3. **Environment Variables**:
    - Create a `.env` file in the **backend** directory for the following environment variables:
        ```
        PORT = 3000
        db_url="mongodb+srv://naseer:mongo2024@cluster1.5jvgt.mongodb.net/"
        SECRET_KEY="masaischoolproject"
        ```
    
4. **Run the Backend**:
    ```bash
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
- **Username**: `pranav@gmail.com`
- **Password**: `12345678`

## APIs Used
- **MongoDB Atlas**: To store user, thread, and article data.
- **JWT Authentication**: Used for secure login and session management.

## API Endpoints

## Technology Stack
- **Frontend**:
  - **React**: For building dynamic user interfaces.
  - **Vite**: For fast and optimized bundling and development.
  - **CSS (Styled Components)**: For styling the application.

- **Backend**:
  - **Node.js**: Runtime environment for the backend server.
  - **MongoDB**: NoSQL database to store user, article, thread, and comment data.

- **Other Tools**:
  - **Netlify**: For deploying the frontend.
  - **MongoDB Atlas**: For hosting the database.

---

Feel free to adjust or add any details depending on your app’s exact setup. This README will help guide users, developers, and reviewers through the setup, usage, and deployment of your **Threadify** app.
