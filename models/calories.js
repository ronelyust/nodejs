/*
   Authors: Noam Damari 209280601, Ronel Yust 318434644, Sofi Eliazarov 325025872
   Description: This file contains the model for the calories items for the MongoDB database
*/

// Adding all our dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the calories collection
const caloriesSchema = new Schema({
   id: {
        type: String,
        required: true,
        unique: true
    },
    user_id: {
        type: Number,
        // Requires a user id for each calories item.
        required: true 
    },
    year: {
        type: Number,
        // Requires a year for each calories item.
        required: true 
    },
    month: {
        type: Number,
        // Requires a month for each calories item.
        required: true
    },
    day: {
        type: Number,
        // Requires a day for each calories item.
        required: true,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
        enum: ["breakfast" , "lunch" , "dinner" , "other"],
        // Requires a category for each calories item.
        required: true
    },
    amount: {
        type: Number,
        // Requires an amount of calories for each calories item.
        required: true,
    }
});

// Create a model named Calories based on the schema
const Calories = mongoose.model('Calories',caloriesSchema);
module.exports = Calories;
