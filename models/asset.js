const mongoose = require('mongoose');
const db = mongoose.createConnection('mongodb://localhost:27017/udaan', { useNewUrlParser: true });
const Schema = mongoose.Schema;


const locationSchema = Schema({
    building: String,
    floor: String,
    roomNo: String,
});

const assetSchema = Schema({
    type: {
        type: String,
        required: true
    },
    // location of asset
    location: locationSchema,
    // tags to identify asset with, such as appliance, room etc
    tags: [String],
    // possible tasks that can be performed on this asset
    possibleTasks: [{
        type: Schema.Types.ObjectId,
        ref: 'task'
    }]
});

const asset = db.model("asset", assetSchema);

module.exports = { asset };
