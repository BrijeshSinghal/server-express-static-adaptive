const express = require("express");
const router = express.Router();

// default get request
router.get("/", (req, res) => {
	res.render("index/tablet/home", {
		layout: "tablet",
	});
});

module.exports = router;
