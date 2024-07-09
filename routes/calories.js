/*
   Authors: Noam Damari 209280601, Ronel Yust 31843644, Sofi Eliazarov 325025872
   Description: This file contains the model for the user item for the MongoDB database.
*/

const express = require('express');
const router = express.Router();
const Calories = require('../models/calories');

router.post('/' , async (req , res) => {
    const {user_id, year, month, day, description, category, amount} = req.body;

    try {
        const calories = await Calories.create({user_id, year, month, day, description, category, amount});
        res.status(200).json(calories);
    } catch (error) {
        res.status(400).json({error: error.massage})
    }
});

module.exports = router;
