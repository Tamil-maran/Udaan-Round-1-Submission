const mongoose = require('mongoose');
const db = mongoose.createConnection('mongodb://localhost:27017/udaan', { useNewUrlParser: true });
const Schema = mongoose.Schema;
const { skillSchema } = require('./worker');

const taskSchema = Schema({
    action: {
        type: String,
        required: true,
    },
    frequency: {
        type: String,
        required: true,
    },
    requiredSkills: [String]
});

const task = db.model("task", taskSchema);

module.exports = { task, taskSchema };
