/*
   Authors: Noam Damari 209280601, Ronel Yust 31843644, Sofi Eliazarov 325025872
   Description: This file contains the model for the user item for the MongoDB database.
*/

// Adding all our dependencies.
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Using express js and configuring our port.
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Import routes
const caloriesRoutes = require('./routes/calories');
const usersRoutes = require('./routes/users');
const reportRoutes = require('./routes/report');
const aboutRoutes = require('./routes/about');

// Use routes
app.use('/addcalories', caloriesRoutes);
app.use('/users', usersRoutes);
app.use('/report', reportRoutes);
app.use('/about', aboutRoutes);

// Creating our server and connecting our mongodb database with our custom cluster link.
const startServer = async () => {
  const mongoUri = 'mongodb+srv://ronel:12345@projectcluster.989obrp.mongodb.net/?retryWrites=true&w=majority&appName=ProjectCluster';

    mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log('MongoDB connected');
        initializeDB();  // Initialize DB with a user
    }).catch(err => console.log(err));

    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}/`); //checking to see the server has started
    });
};

// Initialize the database with a user
const Users = require('./models/users');

const initializeDB = async () => {
    try {
        const user = await Users.findOne({ id: 123123 });
        if (!user) {
            const newUser = new Users({
                id: 123123,
                first_name: 'moshe',
                last_name: 'israeli',
                birthday: 'January 10th, 1990'
            }); //making sure we have the initial user.
            await newUser.save();
            console.log('Initial user created');
        } else {
            console.log('Initial user already exists');
        }
    } catch (error) {
        console.error('Error initializing database:', error);
    }
};

startServer();
