const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const app = express();
const router = require('./routes/contactRoutes');
const port = process.env.PORT || 5000;

app.use(cors());
app.use('/api/contacts', router.router);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});