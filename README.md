# MERN Shop E-Commerce App

This project is a Full-Stack E-Commerce App built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Prerequisites

- Node.js and npm
- MongoDB Atlas account (free account is sufficient)

## Setting up MongoDB

1. __Sign Up and Create a Project on MongoDB Atlas__

- Go to [mongodb.com](https://mongodb.com) and sign up or log in.

- Create an organization if you haven’t already, then create a new project by clicking New Project. Name the project and add team members if needed.

2. __Build a Database__

- Within your project, click Build a Database.
- Choose the free option with AWS as the provider, then click Create.
- Set a username and password for your database and click Create User.
- Add your IP address (or allow access from anywhere), then click Finish and Close.

### Database Connection

3. Get Your Connection String

- Click Connect on your cluster, choose Drivers, and copy the connection string.

- In your project directory, locate example.env, rename it to .env, and add your MongoDB URI.

```plaintext
    NODE_ENV=development
    PORT = 8000
    MONGO_URI=ADD_YOUR_MONGO_URI
```

Replace `YOUR_MONGO_URI_HERE` with the actual MongoDB URI, substituting `<password>` with your MongoDB password and adding your database name after the `/`, for example, `/mern-shop?`.

4. __Create Database and Collection__

- Back in MongoDB Atlas, go to Browse Collections.
- Click Add My Own Data, set the database name and collection, then click Create.

## MongoDB Compass (Optional)

MongoDB Compass is a helpful GUI tool for managing your database.

1. __Install MongoDB Compass__

- Download [Compass](https://www.mongodb.com/products/tools/compass) and install it.

2. __Connect Compass to Your Database__

- In MongoDB Atlas, go to your cluster and click Connect.

- Choose Compass from the list, copy the connection string, then open Compass and paste it into the URI field.

- Replace `<password>` with your password and add your database name, then click __Save & Connect__.

## Importing and Destroying Data

To load sample data into your MongoDB server:

- Run the following command from the root directory of the project:

`npm run data:import`

To remove data:

`npm run data:destroy`
