const mongoose = require('mongoose')

var Schema = mongoose.Schema;
var Form = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        default: ""
    },
    budget: {
        type: Number,
        required: true
    },
    services: {
        type: Array,
        default: "web"
    },
    createdAt: Date
});

// Compile model from schema
var FormModel = mongoose.model('FormModel', Form);
module.exports = FormModel