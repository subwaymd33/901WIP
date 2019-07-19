const express = require('express');
let app = express();
let config = require('./config.json');
app.use(require('./routes/index.js'));
const path = require('path');

app.listen(config.port, (err) =>{
    if (err) {
        return console.log('something bad happened', err);
    }
    console.log(`Listening on port ${config.port}`);
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','pug');
app.use(express.static(path.join(__dirname, 'public')));
