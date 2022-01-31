const express = require("express");
const router = express.Router();

// default get request
router.get("/", (req, res) => {
	res.render("index/desktop/home", {
		layout: "desktop",
	});
});

module.exports = router;
