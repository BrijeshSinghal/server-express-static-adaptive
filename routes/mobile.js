const express = require("express");
const router = express.Router();

// default get request
router.get("/", (req, res) => {
	res.render("index/mobile/home", {
		layout: "mobile",
	});
});

router.get("/test", (req, res) => {
	res.render("index/mobile/home", {
		layout: "mobile",
	});
	console.log("hello mobile test");
});

module.exports = router;
