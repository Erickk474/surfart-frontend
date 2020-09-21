const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/front-surfArt'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/front-surfArt/index.html');
});

app.listen(process.env.PORT || 8080);