// bring in express
const express = require("express");
// bring in express handlebars
const exphbs = require("express-handlebars");
// initialise express with the epxress class constructor
const app = express();
// bring in path
const path = require("path");

// middleware logger
const logger = require("./middleware/logger");
app.use(logger);

// importing routes
const desktop = require("./routes/desktop");
const mobile = require("./routes/mobile");

// set view engine to express handlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// set static folder (home dir for requests)
app.use(express.static(path.join(__dirname, "public")));

// route mobile
app.use("/mobile", mobile);
// route desktop
app.use("/", desktop);

// port
const PORT = 80;
app.listen(PORT, () => console.log(`server started on ${PORT}`));
