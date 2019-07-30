const express = require('express');
const app = express();
const asset = require('./routes/asset');
const task = require('./routes/task');
const worker = require('./routes/worker');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/', asset);
app.use('/', task);
app.use('/', worker);

app.get("/", (req, res, next) => {

    console.log("Connected");
    res.send("<h1>Hello</h1>");

});



app.use((err, req, res, next) => {

	// Handle errors from middlewares
	if(err.type == 'entity.parse.failed')
		res.status(400).json({
			posted: false,
			message: 'JSON Parse failed'
		});
});

app.listen(3000, () => console.log('App started'));
module.exports = app;