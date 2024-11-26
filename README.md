# 🏪 MERN Shop E-Commerce App

This project is a Full-Stack E-Commerce Application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It simulates a real-world webshop with essential features like user authentication, product management, shopping cart functionality, order management, and an admin dashboard. (This project is containerized using Docker.)

---

## Project Overview

![App Preview](/frontend/src/assets/mern-overview.png)

### 🔗 LIVE DEMO

You can check out the live version of the app here: [Live Demo on Render](https://mern-shop-ooqh.onrender.com/)

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
   - [General Features](#general-features)
   - [Customer Features](#customer-features)
   - [Admin Features](#admin-features)
   - [Security](#security)
3. [Tech Stack](#tech-stack)
   - [Frontend](#frontend)
   - [Backend](#backend)
4. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Setting up MongoDB](#setting-up-mongodb)
5. [Installation and Setup](#installation-and-setup)
   - [Setting up JWT Secret](#setting-up-jwt-secret)
6. [Dockerizing the Application](#dockerizing-the-application)
   - [Docker Prerequisites](#docker-prerequisites)
   - [Docker Commands](#docker-commands)
7. [Running the Application](#running-the-application)
   - [Without Docker](#without-docker)
   - [With Docker](#with-docker)
8. [Scripts](#scripts)
9. [File Structure](#file-structure)
10. [Additional Notes](#additional-notes)
11. [License](#license)

---

## Features

### General Features

- Fully functional e-commerce experience with product browsing, user authentication, and order placement.
- Responsive user interface for seamless navigation across devices.
- Built-in admin dashboard for managing data.

### Customer Features

- Browse products with details (image, description, price, and reviews).
- Add products to a cart and follow a 4-step checkout process:

1. **Sign In** (**JWT** authentication with secure token storage).
2. **Shipping:** Enter shipping details.
3. **Payment:** Mock payment integration (no real gateways used).
4. **Place Order:** Finalize and view the order summary.

- Review the order status (Paid, Delivered).

- Rate and review products (each user can rate a product only once).

### Admin Features

- Access an Admin Dashboard displaying:
  - Total sales, product count, users, and orders.
- Manage the app:
  - Products: Add, edit, or delete products (with image upload using Multer).
  - Users: View, update, or delete users accounts.
  - Orders: View orders and update statuses (Paid/Delivered).

### Security

- `Password Encryption`: Passwords are encrypted using bcrypt.js.
- Token-based authentication with `JWT`.

---

## Tech Stack

### Frontend

- **React.js**: For building the user interface.
- **React Bootstrap**: For responsive styling and prebuilt UI components.
- **Redux Toolkit**: For global state management.
- **React Router DOM**: For routing between pages.
- **React Toastify**: For user notifications.
- **SASS**: For styling with extended CSS features.

### Backend

- **Node.js & Express.js**: For creating the RESTful API and managing server-side logic.
- **MongoDB (via Mongoose)**: For the database to store users, products, orders, and reviews.
- **JWT**: For user authentication.
- **Multer**: For handling image uploads.

---

## Getting Started

Follow these steps to set up the project locally.

## Prerequisites

Ensure you have the following installed:

- Node.js and npm
- A MongoDB Atlas account (free tier is sufficient).

## Setting up MongoDB

- **Create a MongoDB Cluster**

1. Sign in or sign up at [mongodb.com](https://mongodb.com)

2. Create a new project and build a database cluster (choose free tier).

3. Set a username and password for the database.

4. Allow connections from your IP or enable access from anywhere.

- **Configure .env File**
- Rename example.env to .env in your project directory.
- Add your MongoDB connection string:

```plaintext
NODE_ENV=development
PORT=8000
MONGO_URI=<your_mongo_uri>
JWT_SECRET=<your_jwt_secret>
```

- **Import Sample Data**

- Import predefined sample data:

```bash
npm run data:import
```

- To clear the database:

```bash
npm run data:destroy
```

---

## Installation and Setup

- Clone the repository:

```bash
git clone <https://github.com/ghezel1995/mern-shop.git>
cd mern-shop
npm install
npm install --prefix frontend
```

- Install dependencies for both backend and frontend:

```bash
npm install
npm install --prefix frontend
```

- Set up your MongoDB connection:
  - Replace `MONGO_URI` with your MongoDB connection string.

### Setting up JWT Secret

The JWT secret is simply a random string that you define in your .env file to sign and verify tokens. Just write a random string for it in the `.env` file for `JWT_SECRET`, like:

`aaa111`

---

## Dockerizing the Application

The project is fully Dockerized to simplify setup and deployment. Using Docker ensures consistent environments for development and production.

### Docker Prerequisites

1. **Install Docker**:

   - [Download Docker](https://www.docker.com/products/docker-desktop) for your operating system.

2. **Verify Installation**:
   Run the following command to ensure Docker is installed:

```bash
docker --version
```

### Docker Commands

1. Build the Docker Image: Navigate to the project directory and run:

   ```bash
   docker build -t mern-shop .
   ```

   This command:

   - Installs all dependencies for the backend and frontend.
   - Builds the production-ready React app.
   - Prepares the app for deployment.

2. Run the Docker Container: Start a container from the built image:

   ```bash
   docker run -p 8000:8000 -p 3000:3000 --name mern-shop-container mern-shop
   ```

   - The backend will be available at `http://localhost:8000`.
   - The frontend will be available at `http://localhost:3000`.

3. Stop the Docker Container: To stop the running container, use:

   ```bash
   docker stop mern-shop-container
   ```

4. Remove the Docker Container: To clean up the container:

   ```bash
   docker rm mern-shop-container
   ```

---

### Running the Application

#### Without Docker

Run the backend and frontend concurrently:

```bash
npm run dev
```

#### With Docker

Run the app using the following commands:

1. Build the image:

   ```bash
   docker build -t mern-shop .
   ```

2. Run the container:

   ```bash
   docker run -p 8000:8000 -p 3000:3000 mern-shop
   ```

The backend will be available at `http://localhost:8000`.
The frontend will be available at `http://localhost:3000`.

---

## Scripts

### From the Root Directory

| Command                | Description                                      |
| ---------------------- | ------------------------------------------------ |
| `npm start`            | Starts the backend server.                       |
| `npm run client`       | Starts the React frontend.                       |
| `npm run dev`          | Runs both the frontend and backend concurrently. |
| `npm run build`        | Builds the React app for production.             |
| `npm run data:import`  | Imports initial sample data into MongoDB.        |
| `npm run data:destroy` | Destroys all data in MongoDB.                    |

---

## File Structure

```plaintext
MERN-SHOP/
├── backend/
│   ├── config/               # Database connection with Mongoose
│   ├── controllers/          # Controller functions for handling request logic.
│   ├── data/                 # Sample data files for initial database population.
│   ├── middleware/           # Custom middleware (e.g., authentication, error handling, asyncHandler).
│   ├── models/               # Mongoose models(Schemas) for MongoDB collections.
│   ├── routes/               # Express routes for API endpoints.
│   ├── utils/                # Generating Token(JWT)
│   ├── initialDataLoader.js  # Script to import and destroy sample data.
│   └── server.js             # Main server file to start the backend.
│
├── frontend/
│   ├── node_modules/         # Contains frontend dependencies.
│   ├── public/               # Static files and the `index.html` template.
│   ├── src/
│   │   ├── assets/           # Static assets such as images and styles.
│   │   ├── components/       # Reusable React components (e.g., Navbar, Footer).
│   │   ├── screens/          # React components representing pages/screens.
│   │   ├── slices/           # Redux slices for global state management.
│   │   ├── utils/            # Utility function for cart.
│   │   ├── App.js            # Main app component for route management and provider setup.
│   │   ├── constants.js      # Application-wide constants (API URLs).
│   │   ├── index.js          # Entry point of the React app and Routers.
│   │   ├── Products.js       # Component handling product-related logic.
│   │   ├── setupTests.js     # Jest setup for testing.
│   │   └── store.js          # Redux store configuration.
│
├── uploads/                  # Directory for uploaded images (handled by Multer).
├── .env                      # Environment variables for backend configuration.
├── .gitignore                # Git ignore file.
├── Dockerfile                  # Instructions for building a Docker image
├── .dockerignore               # Specifies files and directories to ignore when building Docker images
├── package-lock.json         # Lock file for package dependencies.
├── package.json              # Project metadata and scripts.
└── README.md                 # Project documentation.
```

---

### Additional Notes

- **Frontend Proxy**: The `proxy` field in `frontend/package.json` ensures requests to `/api` are proxied to the backend server during development.

- **Mock Payment**: The payment functionality is mocked and doesn't use real payment gateways.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---
