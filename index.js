/*
   Authors: Noam Damari 209280601, Ronel Yust 31843644, Sofi Eliazarov 325025872
   Description: This file contains the model for the user item for the MongoDB database.
*/

// Adding all our dependencies.
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Using express js.
const app = express();

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

// MongoDB connection setup.
const mongoUri = 'mongodb+srv://ronel:12345@projectcluster.989obrp.mongodb.net/?retryWrites=true&w=majority&appName=ProjectCluster';
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        // Making sure we wait for the connection and then start the server only after we initialized our database
        console.log('MongoDB connected');
        initializeDB();
        startServer(); 
        
    })
    //handling exceptions in the case of an error
    .catch(err => console.error('MongoDB connection error:', err)); 
    

// Initialize the database with a user
const Users = require('./models/users');

async function initializeDB() {
  try {
      const user = await Users.findOne({ id: 123123 });
      if (!user) { 
          // Waiting to find our established user, if there isn't one proceed to create it
          const newUser = new Users({
              user_id:123123,
              first_name: 'moshe',
              last_name: 'israeli',
              birthday: 'January 10th, 1990'
          }); 
          await newUser.save();
          // After creation we save the user.
          console.log('Initial user created'); 
      } else {
             // In cases where the user already exists
            console.log('Initial user already exists'); 
        }
  } catch (error) {
      // If there was an error while creating the user show it.
      console.error('Error initializing database:', error);
  } 
}

function startServer() {
//Making sure the server is running.
  app.listen(3000, () => {
      console.log(`Server running on port: 3000`);
  }); 
}