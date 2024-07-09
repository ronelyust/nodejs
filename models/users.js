/*
   Authors: Noam Damari 209280601, Ronel Yust 31843644, Sofi Eliazarov 325025872
   Description: This file contains the model for the user item for the MongoDB database.
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the users collection
const usersSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true // Ensures each user has a unique ID
    },
    first_name: {
        type: String,
        required: true // Requires a first name for each user
    },
    last_name: {
        type: String,
        required: true // Requires a last name for each user
    },
    birthday: {
        type: String,
        required: true// Requires a birthday for each user
    }

});

// Create a model named Users based on the schema
const users = mongoose.model('users',usersSchema);

module.exports = users;