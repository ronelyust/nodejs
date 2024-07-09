/*
   Authors: Noam Damari 209280601, Ronel Yust 31843644, Sofi Eliazarov 325025872
   Description: This file contains the model for the user item for the MongoDB database.
*/

const express = require('express');
const router = express.Router();
const Calories = require('../models/calories');

// Define the GET route for fetching the detailed report
router.get('/', async (req, res) => {
    const { user_id, year, month } = req.query; // Extract query parameters from the request

    try {
        const categories = ['breakfast', 'lunch', 'dinner', 'other']; // Define the calorie categories
        const report = {}; // Initialize an empty object to hold the report

        // Fetch calories for each category
        for (const category of categories) {
            // Find all calorie entries for the given user, year, month, and category
            const caloriesInCategory = await Calories.find({ user_id, year, month, category });

            // Format the output as required
            if (caloriesInCategory.length > 0) {
                // If there are calorie entries, map them to the desired format
                report[category] = caloriesInCategory.map(calorie => ({
                    day: calorie.day,
                    description: calorie.description,
                    amount: calorie.amount
                }));
            } else {
                // Set to empty array if no items found in the category
                report[category] = [];
            }
        }

        // Send the formatted report as JSON response
        res.status(200).json(report);
    } catch (error) {
        // Handle any errors that occur during the process
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
