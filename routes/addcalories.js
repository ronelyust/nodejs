/*
   Authors: Noam Damari 209280601, Ronel Yust 318434644, Sofi Eliazarov 325025872
   Description: This file contains the calories route
*/

// Adding all our dependencies.
const express = require('express');
const router = express.Router();
const Calories = require('../models/calories');
const uuid = require('uuid');

// Define a GET route to render the page for adding a new calories item
router.get('/', async (req, res) => {
    res.send("Add calories item page");
});

// Define the POST route for creating new calories items with a generated ID
router.post('/' , async (req , res) => {
    // Extract body parameters from the request
    const {user_id, year, month, day, description, category, amount} = req.body;

   const id = uuid.v4()

    try {
        // Trying to create a new Calorie data entry by using our parameters
        const caloriesEntery = await Calories.create({id, user_id, year, month, day, description, category, amount});
        // If the new entry was successfully created, send the formatted entry as JSON response
        res.status(200).json(caloriesEntery);
    } catch (error) {
        // Error handling in the case the entry wasn't created
        res.status(400).json({error: error.massage|| 'An error occurred while adding calories items' })
    }
});

module.exports = router;
