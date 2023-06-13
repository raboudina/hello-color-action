const express = require('express');
const app     = express();
const PORT = 5000;

app.use(express.static(__dirname + '/'));

app.get('/',function(req,res) {
    res.sendFile(__dirname +'/index.html');
  });
//app.use(express.static("index.html"));

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});


