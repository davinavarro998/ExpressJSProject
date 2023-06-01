const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const router = require('./routes/contactRoutes');
const port = process.env.PORT || 5000;

app.use('/api/contacts', router.router);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});