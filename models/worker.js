const mongoose = require('mongoose');
const db = mongoose.createConnection('mongodb://localhost:27017/udaan', { useNewUrlParser: true });
const Schema = mongoose.Schema;

// TO-DO - Add more details for worker schema
const workerSchema = Schema({
    firstName: {
        type: String,
        required: true,
        maxlen: 30,
    },
    lastName: {
        type: String,
        required: true,
        maxlen: 30,
    },
    skills: {
        type: [String]
    }
});

const worker = db.model("worker", workerSchema);

module.exports = {  worker };
