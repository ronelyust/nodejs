/*
   Authors: Noam Damari 209280601, Ronel Yust 318434644, Sofi Eliazarov 325025872
   Description: This file contains the users route
*/

// Adding all our dependencies.
const express = require('express');
const router = express.Router();
const Users = require('../models/users');

// Define the GET route for fetching a user by its id
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        // Waiting to find a user.
        const user = await Users.findOne({ id: id });
        if (user) {
            // If the user exists, send the formatted user as JSON response
            res.status(200).json(user);
        } else {
            // If the user wasn't found send an error
            res.status(404).json({ error: 'User not found' });
        }
    // Error handling
    } catch (error) {
        res.status(400).json({ error: error.massage|| 'An error occurred while trying to find the user' });
    }
});

module.exports = router;

