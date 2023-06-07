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
let id = 0;


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
    body.id = id++;
    posts.push(body);
    res.render('all-posts', {posts:posts});
});

app.post("/delete-post/:id", (req, res) => {
    const { id } = req.params;
    posts = posts.filter((post) => post.id !== +id); // delete the post with the matching id
    res.redirect("/all-posts"); // redirect back to the posts page
});

app.get("/edit-post/:id", (req, res) => {
  const { id } = req.params;
  const post = posts.find((post) => post.id === +id);
  if (post) {
    res.render("edit-post", { post: post });
  } else {
    res.status(404).send("Post not found");
  }
});

app.post("/update-post/:id", (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const postIndex = posts.findIndex((post) => post.id === +id);
  if (postIndex !== -1) {
    posts[postIndex].title = title;
    posts[postIndex].content = content;
    res.redirect("/all-posts");
  } else {
    res.status(404).send("Post not found");
  }
});



app.listen(port, () => {
    console.log(`Blog app listening on http://localhost:${port}/home`);
});
