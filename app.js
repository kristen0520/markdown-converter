var express= require("express");
var path = require("path");
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static('public'))


app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html')
})






app.listen(port, console.log("app running on port "+ port))