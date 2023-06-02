const express = require('express');
const port = 3000;
const app = express();
const path = require('path');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views')); 


let peopleGroup = ['Jason', 'Kimberly', 'Trini', 'Billy', 'Zack', 'Tommy'];


app.get('/', (req, res)=>{
    console.log('GET request');
    res.render('index.html', {peopleGroup:peopleGroup});
});

app.get('/delete/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    console.log(`GET request at /delete/${id}`);
    peopleGroup = peopleGroup.filter((value, position)=>{
        return position !== id;
    });
    res.render('index.html', {peopleGroup:peopleGroup});
});

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});