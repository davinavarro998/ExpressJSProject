const express = require('express');

const router = express.Router();

router.route('/').get((req, res)=>{
    const getResponse = { message: "Get all contacts!" };
    console.log(`GET request was made at route /`);
    console.log(getResponse);
    res.status(200).json(getResponse);
});

router.route('/:id').get((req, res)=>{
    const id = req.params.id;
    const getResponse = {message:`GET contact ${id}`};
    console.log(getResponse);
    res.status(200).json(getResponse);
});

router.route('/').post((req, res)=>{
    const postMessage = { message: "Create contact" };
    console.log(`POST request was made at route /`);
    console.log(postMessage);
    res.status(200).json(postMessage);
});

router.route('/:id').put((req, res)=>{
    const id = req.params.id;
    const putMessage = {message:`Update contact ${id}`};
    console.log(`PUT request was made at api/contacts/${id}`);
    res.status(200).json(putMessage);
});


router.route('/:id').delete((req, res)=>{
    const id = req.params.id;
    const deleteMessage = {message:`Delete contact ${id}`};
    console.log(`DELETE request was made at api/contacts/${id}`);
    res.status(200).json(deleteMessage);
});

module.exports = {
    router:router
}