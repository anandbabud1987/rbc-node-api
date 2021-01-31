'use strict';
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const products=require('../products.json')

/* GET users listing. */
router.get('/', function (req, res, next) {
    const product = JSON.parse(JSON.stringify(products));
    res.send(product);
});

module.exports = router;
