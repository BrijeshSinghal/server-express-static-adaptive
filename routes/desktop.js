const express = require("express");
const router = express.Router();

// default get request
router.get("/", (req, res) => {
	res.render("index/desktop/home", {
		layout: "desktop",
	});
});

router.get("/test", (req, res) => {
	res.render("index/desktop/home", {
		layout: "desktop",
	});
	console.log("hello desktop test");
});

module.exports = router;
