/*
   Authors: Noam Damari 209280601, Ronel Yust 31843644, Sofi Eliazarov 325025872
   Description: This file contains the model for the user item for the MongoDB database.
*/

const express = require('express');
const router = express.Router();

/* GET developers details list */
router.get('/', function(req, res, next) {

    res.status(200).json([
        {firstname:"noam",lastname:"damari",id:209280601,email:"noamdamari5@gmail.com"},
        {firstname:"ronel",lastname:"yust",id:31843644,email:"ronelyust@gmail.com"},
        {firstname:"sofi",lastname:"eliazarov",id:325025872,email:"sofi.eli121@gmail.com"}
    ]);
});

module.exports = router;