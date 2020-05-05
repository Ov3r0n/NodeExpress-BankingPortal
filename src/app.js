const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
const port = 3000;

// Static files
app.use(express.static(path.join(__dirname, '/src/public')));
//app.use('/css', express.static(path.join(__dirname, '/src/public/css')));
//app.use('/js', express.static(path.join(__dirname, '/src/public/js')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index', {title: 'Index'});
})

app.listen(port, () => console.log(`PS Project Running on port ${port}!`));
