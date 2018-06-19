const express = require('express');
const path = require('path');

var app = express();
var url = path.join(__dirname,'../public');
const port = process.env.PORT || 4000 ;

app.use(express.static(url));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})