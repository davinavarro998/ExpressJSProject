const express = require('express');
const port = 3000;
const app = express();
const path = require('path');

app.engine('html', require('ejs').renderFile);
/* app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views')); */

app.get('/', (req, res)=>{
    console.log('GET request');
    res.render('index.html', {jason:`Lee Scott`});
});

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});