const express = require('express');

const app = express();

const port = 5000;

app.get('/', (req, res)=>{
    console.log(`GET request was made at route /`);
    res.status(200).send('Hello, world!');
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});