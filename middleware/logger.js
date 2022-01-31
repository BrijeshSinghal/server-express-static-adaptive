// bring in moment
const moment = require("moment");

// logger middleware
const logger = (req, res, next) => {
	console.log(
		`${moment().format("HH:mm:ss")} ${req.method} ${
			req.protocol
		}://${req.get("host")}${req.originalUrl}`
	);
	next();
};

module.exports = logger;

// bring in logger
// const logger = require("./middleware/logger");
// use logger
// app.use(logger);
