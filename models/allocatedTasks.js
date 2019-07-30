const mongoose = require('mongoose');
const db = mongoose.createConnection('mongodb://localhost:27017/udaan', { useNewUrlParser: true });
const Schema = mongoose.Schema;

const allocatedTaskSchema = Schema({

    assetId: Schema.Types.ObjectId,
    taskId: Schema.Types.ObjectId,
    workerId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    timeOfAllocation: {
        type: Date,
        default: Date.now
    },
    taskToBePerformedBy: {
        type: Date,
        required: true
    },
});


const allocatedTask = db.model("allocatedTask", allocatedTaskSchema);

module.exports = { allocatedTask };