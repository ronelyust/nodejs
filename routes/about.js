/*
   Authors: Noam Damari 209280601, Ronel Yust 318434644, Sofi Eliazarov 325025872
   Description: This file contains contains the about route
*/

// Adding all our dependencies.
const express = require('express');
const router = express.Router();

// Define the GET route for the developers details
router.get('/', function(req, res, next) {
    
    // Send the formatted list as JSON response
    res.status(200).json([
        {firstName:'noam',lastName:'damari',id:209280601,email:'noamdamari5@gmail.com'},
        {firstName:'ronel',lastName:'yust',id:318434644,email:'ronelyust@gmail.com'},
        {firstName:'sofi',lastName:'eliazarov',id:325025872,email:'sofi.eli121@gmail.com'}
    ]);
});

module.exports = router;