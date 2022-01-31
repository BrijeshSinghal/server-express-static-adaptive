// bring in express
const express = require("express");
// bring in express handlebars
const exphbs = require("express-handlebars");
// initialise express with the epxress class constructor
const app = express();
// bring in path
const path = require("path");

// importing routes
const desktop = require("./routes/desktop");
const tablet = require("./routes/tablet");
const phone = require("./routes/phone");

// set view engine to express handlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// screenvalidation get request
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "public", "screenValidation.html"));
	// res.sendFile(path.join(__dirname, "public", "index.html"));
});

// set static folder (home dir for requests)
// app.use(express.static(path.join(__dirname, "public")));

// route phone
app.use("/phone", phone);
// route tablet
app.use("/tablet", tablet);
// route desktop
app.use("/desktop", desktop);

// port
const PORT = 80;
app.listen(PORT, () => console.log(`server started on ${PORT}`));
