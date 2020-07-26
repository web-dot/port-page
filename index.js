/**
 * required external modules
 */
const express = require('express');
const path = require('path')
const compression = require('compression');
const helmet = require ('helmet');



 /**
 * app variables
 */

const app = express();
const port = process.env.PORT || "4000";




  /**
 * app configuration
 */
app.use(express.static(path.join(__dirname, "public")));
app.use(compression);
app.use(helmet);




  /**
 * server activation
 */

 app.listen(4000, function(){
   console.log(`listening at http://localhost:${port}`)
 });