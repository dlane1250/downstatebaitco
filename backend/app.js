const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const Product = require('./models/product');
const app = express();

mongoose.connect("mongodb+srv://dylan:WOxNmwUy7vf2DR0G@cluster0-7z8jw.mongodb.net/test?retryWrites=true&w=majority")
    .then(() => {
        console.log('Connected to database!');
    })
    .catch(() => {
        console.log('Connection failed!')
    });

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS')
    next();
});

app.post("/products", (req, res, next) => {
    const product = new Product({
        title: req.body.title,
        img: req.body.img,
        price: req.body.price,
        quantity: req.body.quantity,
        description: req.body.description
    });
    product.save().then(res => {
        res.status(201).json({productId: res._id});
    });
});

app.get('/products', (req, res, next) => {
    Product.find()
        .then(documents => {
            res.status(200).json({products: documents});
    });
});

app.delete("/products/:id", (req, res, next) => {
    Product.deleteOne({_id: req.params.id}).then(result => {
        res.status(200).json();
    });
});

module.exports = app;

// MongoDB Username: dylan Password: WOxNmwUy7vf2DR0G
// Mongo Shell: mongo "mongodb+srv://cluster0-7z8jw.mongodb.net/test"  --username dylan