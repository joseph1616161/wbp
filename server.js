const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));
const port = process.env.PORT || 3000;

console.log(path.join(__dirname + "/index.html"));
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(port, function() {
	console.log("App listening on port 3000!");
});
