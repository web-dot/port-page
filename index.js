// external modules
const express = require("express");
const path = require("path");

// app variables
const app = express();
const port = process.env.PORT || "5500";

//app configuration
app.use(express.static(path.join(__dirname, "public")));

// server activation
app.listen(port, function() {
  console.log(`listening to requests on http://localhost:${port}`);
})