var express = require("express");

//
var app = express();
var port = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended:true }));
app.use(express.json());


app.listen(port, function() {
    console.log("I'm listening at "  + port);

})

