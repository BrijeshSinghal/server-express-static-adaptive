// bring in express
const express = require("express");
// initialise express with the epxress class constructor
const app = express();
// bring in path
const path = require("path");

// set static folder (home dir for requests)
app.use(express.static(path.join(__dirname, "public")));

// default get request
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "public", "index.html"));
});

// port
const PORT = 80;
app.listen(PORT, () => console.log(`server started on ${PORT}`));
