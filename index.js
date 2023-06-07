const express = require("express");
const app = express();
const path = require('path');
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Used to parse JSON bodies
app.use(express.static("public"));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
const port = process.env.PORT;
let posts = [];


app.get('/home', (req, res)=>{
    res.status(200).render('home', {});
});

app.get('/all-posts', (req,res) => {
    res.status(200).render('all-posts', {posts:posts});
});

app.get('/start-posting', (req, res)=> {
    res.status(200).render('start-posting', {});
});

app.post('/all-posts', (req, res)=>{
    const body = req.body;
    posts.push(body);
    res.render('all-posts', {posts:posts});
});


app.listen(port, () => {
    console.log(`Blog app listening on http://localhost:${port}/home`);
});
