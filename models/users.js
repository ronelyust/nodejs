/*
   Authors: Noam Damari 209280601, Ronel Yust 318434644, Sofi Eliazarov 325025872
   Description: This file contains the model for the user item for the MongoDB database
*/

// Adding all our dependencies.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the users collection
const usersSchema = new Schema({
    user_id: {
        type: Number,
        // Requires an id for each user
        required: true,
        // Ensures each user has a unique ID
        unique: true
    },
    first_name: {
        type: String,
        // Requires a first name for each user
        required: true 
    },
    last_name: {
        type: String,
        // Requires a last name for each user
        required: true 
    },
    birthday: {
        type: String,
        // Requires a birthday for each user
        required: true
    }

});

// Create a model named Users based on the schema
const Users = mongoose.model('Users',usersSchema);

module.exports = Users;