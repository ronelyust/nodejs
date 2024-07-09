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

// MongoDB connection setup
const mongoUri = 'mongodb+srv://ronel:12345@projectcluster.989obrp.mongodb.net/?retryWrites=true&w=majority&appName=ProjectCluster';
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
        initializeDB();
        startServer();
    })
    .catch(err => console.error('MongoDB connection error:', err));

// Initialize the database with a user
const Users = require('./models/users');

async function initializeDB() {
  try {
      const user = await Users.findOne({ id: 123123 });
      if (!user) {
          const newUser = new Users({
              id: 123123,
              first_name: 'moshe',
              last_name: 'israeli',
              birthday: 'January 10th, 1990'
          }); //adding our established user.
          await newUser.save();
          console.log('Initial user created');
      } else {
          console.log('Initial user already exists');
      }
  } catch (error) {
      console.error('Error initializing database:', error);
  } // if there was an error while creating the user show it.
}

function startServer() {
  app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}/`);
  });
}