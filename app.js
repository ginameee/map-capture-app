/**
 * Created by owner on 2018-11-08.
 */
"use strict";
var express = require('express');
var app = express();

app.use(express.static('mapCaptureApp'));

app.get('/', (req, res) => {
    res.redirect('mapCaptureApp/index.html');
});

app.listen(3000, function() {
    console.log('Connected 3000 port');
});
