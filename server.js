const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const routes = require('./api/routes');
routes(app);
app.use(express.static('public'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.listen(port, function() {
   console.log('Server started on port: ' + port);
});