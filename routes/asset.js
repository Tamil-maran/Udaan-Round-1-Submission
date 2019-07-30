const express = require('express');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const { asset } = require('../models/asset');
const { task } = require('../models/task');
const router = express.Router();

router.post('/add-asset', async (req, res, next) => {

    try{
        // Add asset to collection
        const result = await new asset(req.body).save();
        return res.status(200).json({status: 'Asset added', id: result._id});
    }
    catch(err) {
        console.trace(err.message);
        return res.status(500).json({error: err.message});
    }
});

router.get('/assets/all', async (req, res, next) => {

    try {
        const result = await asset.find();
        console.log(result);
        return res.status(200).json({assets: result});
    }
    catch(err) {
        console.trace(err.message);
        return res.status(500).json({error: err.message});
    }
});

module.exports = router;