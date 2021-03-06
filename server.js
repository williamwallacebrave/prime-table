
var express = require("express")
    app = express();


app.get("/", function(req, res) {
    res.sendFile(__dirname + '/index.html')
});


/* static file server */
app.use(express.static(__dirname));


var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
