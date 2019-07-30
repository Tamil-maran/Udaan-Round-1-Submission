const express = require('express');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const { task } = require('../models/task');
const router = express.Router();

router.post('/add-task', async (req, res, next) => {

    try {

        // Add task to collection
        const result = await new task(req.body).save();
        return res.status(200).json({status: 'task added', id: result._id});
    }
    catch(err) {
        console.trace(err.message);
        return res.status(500).json({error: err.message});
    }
});

module.exports = router;