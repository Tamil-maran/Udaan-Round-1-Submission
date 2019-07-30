const express = require('express');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const { asset } = require('../models/asset');
const { worker } = require('../models/worker');
const { allocatedTask } = require('../models/allocatedTasks');
const router = express.Router();

router.post('/add-worker', async (req, res, next) => {
    
    try{
        // Add worker to collection
        const result = await new worker(req.body).save();
        return res.status(200).json({status: 'worker added', id: result._id});
    }
    catch(err) {
        console.trace(err.message);
        return res.status(500).json({error: err.message});
    }
});

router.post('/allocate-task', async (req, res, next) => {
    
    const assetId = req.body.assetId;
    const taskId = req.body.taskId;

    try{

        // Check if given task is possible on given asset
        const taskResult = await asset.find({ _id: ObjectId(assetId), possibleTasks: ObjectId(taskId) });
        console.log(taskResult);
        // Not possible
        if(!taskResult.length)
            return res.status(422).json({error: 'Given asset can\'t have given task' });

        // if possible added to allocatedTasks collection
        const result = await new allocatedTask(req.body).save();
        return res.status(200).json({status: 'task allocated', id: result._id});
    }
    catch(err) {
        console.trace(err.message);
        return res.status(500).json({error: err.message});
    }
});

router.get('/get-tasks-for-worker/:workerId', async (req, res, next) => {

    const workerId = req.params.workerId;
    try {
        const result = await allocatedTask.find({ workerId: ObjectId(workerId)} );
        if(result.length) 
            return res.status(200).json({ tasks: result });
        else
            throw new Error("No tasks found for worker");
    }
    catch(err) {
        console.trace(err.message);
        return res.status(500).json({ error: err.message });
    }
});

module.exports = router;