import express = require("express"); 
var app = express();

app.get('/todos', function (req, res) {
   res.send('recipes');
})

var server = app.listen(8081, function () {
    console.log(server.address().address);
    console.log(server.address().port);
    var host = server.address().address
    var port = server.address().port
   
    console.log("Example app listening at http://%s:%s", host, port)
})