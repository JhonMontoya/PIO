const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    description:{
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    }
});

const Item = mongoose.model('Item', itemSchema);

model.exports = Item;
