var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('hello world Test Jenkins and check connectivity part 2 ....');
});
 
app.listen(process.env.PORT || 5000);
 
module.exports = app;
