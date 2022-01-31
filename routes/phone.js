const express = require("express");
const router = express.Router();

// default get request
router.get("/", (req, res) => {
	res.render("index/phone/home", {
		layout: "phone",
	});
});

module.exports = router;
