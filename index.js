const express = require("express");
const app = express();
const path = require('path');
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Used to parse JSON bodies
const posts = [];



app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/views'));



const port = process.env.PORT;

app.get("/", (req, res) => {
    console.log(req);
    res.status(200).render('index');
});

app.get('/post', (req, res)=>{
    const post = {
        title:"My first post",
        content: "This is the content of my first post"
    }
    res.status(200).render('post.ejs', post);
});

app.post("/posts", (req, res) => {
    posts.push(req.body);
    res.redirect(`/posts/${posts.length - 1}`);
});

app.get("/posts/:id", (req, res) => {
    const id = req.params.id;
    const post = posts[id];
    res.render("post", post);
});



app.get('/create', (req, res) => {
    res.status(200).render('create');
});

app.listen(port, () => {
    console.log(`Blog app listening on http://localhost:${port}`);
});
