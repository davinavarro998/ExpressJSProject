const express = require("express");
const app = express();
const path = require('path');
require("dotenv").config();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/views'));



const port = process.env.PORT;

app.get("/", (req, res) => {
    res.status(200).render('index');
});

app.listen(port, () => {
    console.log(`Blog app listening on http://localhost:${port}`);
});
