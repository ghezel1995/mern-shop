# MERN Shop E-Commerce App

This project is a FullStack E-Commerce App built with MERN-Stack.

## MONGODB setup

First you should go to [mongodb.com](https://mongodb.com) and sign in. It is completely free:

Then you should create an organization, after that, you should create a project so, click new project button, In the page will open, name your project and if you have other members add them and click on the create project.

Then click on build a database. Choose the free option and AWS is going to be the provider and then you can click create. On the opend page, create username and password and click on create user.

If you'd want to add your IP Address, you can set it up and click on finish and close button.

### connection

To get our connection screen click on the connect button and on the Drivers and copy the connection string and paste it in the `.env` file.

`
    NODE_ENV=development
    PORT = 8000
    MONGO_URI=ADD_YOUR_MONGO_URI
`

I created the `example.env` file and you can rename the file to `.env` and put your URI into it.

For setting up the database nname and password in the URI you should change the `<password>` with your password and between the `/` and `?` you should write your database name for example `/mern-shop?` otherwise it's going to use the database called test.

Then Click on the Browse Collection and click on Add My Own Data. Set the Database name and collection and click on create.

## Compass MongoDB

You can download and install the [Compass](https://www.mongodb.com/products/tools/compass) form [This Link](https://www.mongodb.com/products/tools/compass).

After installation click on the new connection. Go to your Cluster in the [MongoDB](https://cloud.mongodb.com) site and click on cluster and connect. From the list choose the Compass and copy the connection straing then open MongoDB Compass and paste this connection string in the URI section.

hange the `<password>` with your real password and at the end, after the `/` write your database name, then click on save & connect.