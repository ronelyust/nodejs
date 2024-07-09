/*
   Authors: Noam Damari 209280601, Ronel Yust 31843644, Sofi Eliazarov 325025872
   Description: This file contains the model for the user item for the MongoDB database.
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the calories collection
const caloriesSchema = new Schema({
    user_id: {
        type: Number,
        required: true 
    },
    year: {
        type: Number,
        required: true
    },
    month: {
        type: Number,
        required: true
    },
    day: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ["breakfast" , "lunch" , "dinner" , "other"],
        required: true
    },
    amount: {
        type: Number,
        required: true,
    }
});

const calories = mongoose.model('Calories',caloriesSchema);
module.exports = calories;
