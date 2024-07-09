/*
   Authors: Noam Damari 209280601, Ronel Yust 31843644, Sofi Eliazarov 325025872
   Description: This file contains the model for the user item for the MongoDB database.
*/

const express = require('express');
const router = express.Router();
const Users = require('../models/users');

router.get('/:id', async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await Users.findOne({ id: userId });
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;

